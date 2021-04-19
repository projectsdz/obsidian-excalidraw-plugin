import { TextFileView, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Excalidraw from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState } from "@excalidraw/excalidraw/types/types";


export default class ExcalidrawView extends TextFileView {
  private getScene: any;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
    this.getScene = null;
  }

  // clear the view content
  clear() {
    ReactDOM.unmountComponentAtNode(this.contentEl);
    this.getScene = null;
  }

  // get the new file content
  getViewData () {
    if(this.getScene) return this.getScene();
    else return '';
  }

  setViewData (data: string, clear: boolean) {
    if(clear) this.clear();
    const excalidrawData = JSON.parse(data);
    this.instantiateExcalidraw({
      elements: excalidrawData.elements,
      appState: excalidrawData.appState,
      scrollToContent: true,
    });
  }

  // gets the title of the document
  getDisplayText() {
    if(this.file) return this.file.basename;
    else return "excalidraw (no file)";

  }

  // confirms this view can accept csv extension
  canAcceptExtension(extension: string) {
    return extension == 'excalidraw';
  }  

  // the view type name
  getViewType() {
    return "excalidraw";
  }

  // icon for the view
  getIcon() {
    return "document-excalidraw";
  }

  private instantiateExcalidraw(initdata: any) {  
    ReactDOM.render(React.createElement(() => {
      let previousSceneVersion = 0;
      const excalidrawRef = React.useRef(null);
      const excalidrawWrapperRef = React.useRef(null);
      const [dimensions, setDimensions] = React.useState({
        width: undefined,
        height: undefined
      });
      
      React.useEffect(() => {
        setDimensions({
          width: this.contentEl.clientWidth, 
          height: this.contentEl.clientHeight, 
        });
        const onResize = () => {
          try {
            setDimensions({
              width: this.contentEl.clientWidth, 
              height: this.contentEl.clientHeight, 
            });
          } catch(err) {console.log ("onResize ",err)}
        };
        window.addEventListener("resize", onResize); 
        return () => window.removeEventListener("resize", onResize);
      }, [excalidrawWrapperRef]);
       
      this.getScene = function() {
        const el: ExcalidrawElement[] = excalidrawRef.current.getSceneElements();
        const st: AppState = excalidrawRef.current.getAppState();
        return JSON.stringify({
          "type": "excalidraw",
          "version": 2,
          "source": "https://excalidraw.com",
          "elements": el.filter(e => !e.isDeleted),
          "appState": {
            "theme": st.theme,
            "viewBackgroundColor": st.viewBackgroundColor,
            "gridSize": st.gridSize,
            "zenModeEnabled": st.zenModeEnabled
          }
        });
      };

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          {
            className: "excalidraw-wrapper",
            ref: excalidrawWrapperRef
          },
          React.createElement(Excalidraw.default, {
            ref: excalidrawRef,
            width: dimensions.width,
            height: dimensions.height,
            UIOptions: {
              canvasActions: {
                loadScene: false,
                saveScene: false,
                saveAsScene: false
              },
            },
            initialData: initdata
          })
        )
      );
    }),(this as any).contentEl);
  }
}