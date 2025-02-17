import { FRONTMATTER_KEY_CUSTOM_LINK_BRACKETS, FRONTMATTER_KEY_CUSTOM_PREFIX, FRONTMATTER_KEY_CUSTOM_URL_PREFIX } from "src/constants";

// English
export default {
  // main.ts
  OPEN_AS_EXCALIDRAW: "Open as Excalidraw Drawing",
  TOGGLE_MODE: "Toggle between Excalidraw and Markdown mode",
  CONVERT_NOTE_TO_EXCALIDRAW: "Convert empty note to Excalidraw Drawing",
  CONVERT_EXCALIDRAW: "Convert *.excalidraw to *.md files",
  CREATE_NEW : "New Excalidraw drawing",
  CONVERT_FILE_KEEP_EXT: "*.excalidraw => *.excalidraw.md",
  CONVERT_FILE_REPLACE_EXT: "*.excalidraw => *.md (Logseq compatibility)",
  DOWNLOAD_LIBRARY: "Export stencil library as an *.excalidrawlib file",
  OPEN_EXISTING_NEW_PANE: "Open an existing drawing - IN A NEW PANE",
  OPEN_EXISTING_ACTIVE_PANE: "Open an existing drawing - IN THE CURRENT ACTIVE PANE",
  TRANSCLUDE: "Transclude (embed) a drawing",
  TRANSCLUDE_MOST_RECENT: "Transclude (embed) the most recently edited drawing",
  NEW_IN_NEW_PANE: "Create a new drawing - IN A NEW PANE",
  NEW_IN_ACTIVE_PANE: "Create a new drawing - IN THE CURRENT ACTIVE PANE",
  NEW_IN_NEW_PANE_EMBED: "Create a new drawing - IN A NEW PANE - and embed into active document",
  NEW_IN_ACTIVE_PANE_EMBED: "Create a new drawing - IN THE CURRENT ACTIVE PANE - and embed into active document",
  EXPORT_SVG: "Save as SVG next to the current file",
  EXPORT_PNG: "Save as PNG next to the current file",
  TOGGLE_LOCK: "Toggle Text Element edit RAW/PREVIEW",
  INSERT_LINK: "Insert link to file",
  INSERT_LATEX: "Insert LaTeX-symbol (e.g. $\\theta$)",
  ENTER_LATEX: "Enter a valid LaTeX expression",
  
  //ExcalidrawView.ts
  OPEN_AS_MD: "Open as Markdown",
  SAVE_AS_PNG: "Save as PNG into Vault (CTRL/META+CLICK to export)",
  SAVE_AS_SVG: "Save as SVG into Vault (CTRL/META+CLICK to export)",
  OPEN_LINK: "Open selected text as link\n(SHIFT+CLICK to open in a new pane)",
  EXPORT_EXCALIDRAW: "Export to an .Excalidraw file",
  LINK_BUTTON_CLICK_NO_TEXT: 'Select a Text Element containing an internal or external link.\n'+
                             'SHIFT CLICK this button to open the link in a new pane.\n'+
                             'CTRL/META CLICK the Text Element on the canvas has the same effect!',
  TEXT_ELEMENT_EMPTY: "Text Element is empty, or [[valid-link|alias]] or [alias](valid-link) is not found",
  FILENAME_INVALID_CHARS: 'File name cannot contain any of the following characters: * " \\  < > : | ?',
  FILE_DOES_NOT_EXIST: "File does not exist. Hold down ALT (or ALT+SHIFT) and CLICK link button to create a new file.",
  FORCE_SAVE: "Force-save to update transclusions in adjacent panes.\n(Please note, that autosave is always on)",
  RAW: "Change to PREVIEW mode (only effects text-elements with links or transclusions)",
  PARSED: "Change to RAW mode (only effects text-elements with links or transclusions)",
  NOFILE: "Excalidraw (no file)",
  COMPATIBILITY_MODE: "*.excalidraw file opened in compatibility mode. Convert to new format for full plugin functionality.",
  CONVERT_FILE: "Convert to new format",

  //settings.ts
  FOLDER_NAME: "Excalidraw folder",
  FOLDER_DESC: "Default location for new drawings. If empty, drawings will be created in the Vault root.",
  TEMPLATE_NAME: "Excalidraw template file",
  TEMPLATE_DESC: "Full filepath to the Excalidraw template. " +
                 "E.g.: If your template is in the default Excalidraw folder and it's name is " +
                 "Template.md, the setting would be: Excalidraw/Template.md (or just Excalidraw/Template - you may ommit the .md file extension" + 
                 "If you are using Excalidraw in compatibility mode, then your template must be a legacy excalidraw file as well " + 
                 "such as Excalidraw/Template.excalidraw.",
  AUTOSAVE_NAME: "Autosave",
  AUTOSAVE_DESC: "Automatically save the active drawing every 30 seconds. Save normally happens when you close Excalidraw or Obsidian, or move "+
                 "focus to another pane. In rare cases autosave may slightly disrupt your drawing flow. I created this feature with mobile " +
                 "phones in mind (I only have experience with Android), where 'swiping out Obsidian to close it' led to some data loss, and because " +
                 "I wasn't able to force save on application termination on mobiles. If you use Excalidraw on a desktop this is likely not needed.",
  FILENAME_HEAD: "Filename",
  FILENAME_DESC: "<p>The auto-generated filename consists of a prefix and a date. " + 
                 "e.g.'Drawing 2021-05-24 12.58.07'.</p>"+
                 "<p>Click this link for the <a href='https://momentjs.com/docs/#/displaying/format/'>"+
                 "date and time format reference</a>.</p>",
  FILENAME_SAMPLE: "The current file format is: <b>",
  FILENAME_PREFIX_NAME: "Filename prefix",
  FILENAME_PREFIX_DESC: "The first part of the filename",
  FILENAME_DATE_NAME: "Filename date",
  FILENAME_DATE_DESC: "The second part of the filename",
  LINKS_HEAD: "Links and transclusion",
  LINKS_DESC: "CTRL/META + CLICK on Text Elements to open them as links. " + 
              "If the selected text has more than one [[valid Obsidian links]], only the first will be opened. " + 
              "If the text starts as a valid web link (i.e. https:// or http://), then " +
              "the plugin will open it in a browser. " +
              "When Obsidian files change, the matching [[link]] in your drawings will also change. " +
              "If you don't want text accidentally changing in your drawings use [[links|with aliases]].",
  LINK_BRACKETS_NAME: "Show [[brackets]] around links",
  LINK_BRACKETS_DESC: "In PREVIEW mode, when parsing Text Elements, place brackets around links. " +
                      "You can override this setting for a specific drawing by adding '" + FRONTMATTER_KEY_CUSTOM_LINK_BRACKETS + 
                      ": true/false' to the file\'s frontmatter.",
  LINK_PREFIX_NAME:"Link prefix",
  LINK_PREFIX_DESC:"In PREVIEW mode, if the Text Element contains a link, precede the text with these characters. " +
                   "You can override this setting for a specific drawing by adding \'" + FRONTMATTER_KEY_CUSTOM_PREFIX + 
                   ': "📍 "\' to the file\'s frontmatter.',
  URL_PREFIX_NAME:"URL prefix",
  URL_PREFIX_DESC:"In PREVIEW mode, if the Text Element contains a URL link, precede the text with these characters. " +
                  "You can override this setting for a specific drawing by adding \'" + FRONTMATTER_KEY_CUSTOM_URL_PREFIX + 
                  ': "🌐 "\' to the file\'s frontmatter.',
  LINK_CTRL_CLICK_NAME: "CTRL + CLICK on text to open them as links",
  LINK_CTRL_CLICK_DESC: "You can turn this feature off if it interferes with default Excalidraw features you want to use. If " +
                        "this is turned off, only the link button in the title bar of the drawing pane will open links.",
  TRANSCLUSION_WRAP_NAME: "Overflow wrap behavior of transcluded text",
  TRANSCLUSION_WRAP_DESC: "Number specifies the character count where the text should be wrapped. " + 
                          "Set the text wrapping behavior of transcluded text. Turn this ON to force-wrap " + 
                          "text (i.e. no overflow), or OFF to soft-warp text (at the nearest whitespace).",
  EMBED_HEAD: "Embed & Export",
  EMBED_PREVIEW_SVG_NAME: "Display SVG in markdown preview",
  EMBED_PREVIEW_SVG_DESC: "The default is to display drawings as SVG images in the markdown preview. Turning this feature off, the markdown preview will display the drawing as an embedded PNG image.",
  EMBED_WIDTH_NAME: "Default width of embedded (transcluded) image",
  EMBED_WIDTH_DESC: "Only relevant if embed type is excalidraw. Has no effect on PNG and SVG embeds. The default width of an embedded drawing. You can specify a custom " +
                    "width when embedding an image using the ![[drawing.excalidraw|100]] or " +
                    "[[drawing.excalidraw|100x100]] format.",
  EMBED_TYPE_NAME: "Type of file to insert into the document",                    
  EMBED_TYPE_DESC: "When you embed an image into a document using the command palette this setting will specify if Excalidraw should embed the original excalidraw file "+
                   "or a PNG or an SVG copy. You need to enable auto-export PNG / SVG (see below under Export Settings) for those image types to be available in the dropdown. For drawings that do not have a " +
                   "a correspondign PNG or SVG readily available the command palette action will insert a broken link. You need to open the original drawing and initiate export manually. " +
                   "This option will not autogenerate PNG/SVG files, but will simply reference the already existing files.",
  EXPORT_PNG_SCALE_NAME: "PNG export image scale",
  EXPORT_PNG_SCALE_DESC: "The size-scale of the exported PNG image",
  EXPORT_BACKGROUND_NAME: "Export image with background",
  EXPORT_BACKGROUND_DESC: "If turned off, the exported image will be transparent.",
  EXPORT_THEME_NAME: "Export image with theme",
  EXPORT_THEME_DESC: "Export the image matching the dark/light theme of your drawing. If turned off, " +
                     "drawings created in drak mode will appear as they would in light mode.",
  EXPORT_HEAD: "Export Settings",
  EXPORT_SYNC_NAME:"Keep the .SVG and/or .PNG filenames in sync with the drawing file",
  EXPORT_SYNC_DESC:"When turned on, the plugin will automaticaly update the filename of the .SVG and/or .PNG files when the drawing in the same folder (and same name) is renamed. " +
                  "The plugin will also automatically delete the .SVG and/or .PNG files when the drawing in the same folder (and same name) is deleted. ",
  EXPORT_SVG_NAME: "Auto-export SVG",
  EXPORT_SVG_DESC: "Automatically create an SVG export of your drawing matching the title of your file. " + 
                   "The plugin will save the *.SVG file in the same folder as the drawing. "+
                   "Embed the .svg file into your documents instead of excalidraw making you embeds platform independent. " +
                   "While the auto-export switch is on, this file will get updated every time you edit the excalidraw drawing with the matching name.",
  EXPORT_PNG_NAME: "Auto-export PNG",
  EXPORT_PNG_DESC: "Same as the auto-export SVG, but for *.PNG",
  COMPATIBILITY_HEAD: "Compatibility features",
  EXPORT_EXCALIDRAW_NAME: "Auto-export Excalidraw",
  EXPORT_EXCALIDRAW_DESC: "Same as the auto-export SVG, but for *.Excalidraw",
  SYNC_EXCALIDRAW_NAME: "Sync *.excalidraw with *.md version of the same drawing",
  SYNC_EXCALIDRAW_DESC: "If the modified date of the *.excalidraw file is more recent than the modified date of the *.md file " +
                        "then update the drawing in the .md file based on the .excalidraw file",
  COMPATIBILITY_MODE_NAME: "New drawings as legacy files",
  COMPATIBILITY_MODE_DESC: "By enabling this feature drawings you create with the ribbon icon, the command palette actions, "+
                           "and the file explorer are going to be all legacy *.excalidraw files. This setting will also turn off the reminder message " + 
                           "when you open a legacy file for editing.",
  EXPERIMENTAL_HEAD: "Experimental features",
  EXPERIMENTAL_DESC: "These setting will not take effect immediately, only when the File Explorer is refreshed, or Obsidian restarted.",
  FILETYPE_NAME: "Display type (✏️) for excalidraw.md files in File Explorer",
  FILETYPE_DESC: "Excalidraw files will receive an indicator using the emojii or text defined in the next setting.",                           
  FILETAG_NAME: "Set the type indicator for excalidraw.md files",
  FILETAG_DESC: "The text or emojii to display as type indicator.",                           
  INSERT_EMOJI: "Insert an emoji",


  //openDrawings.ts
  SELECT_FILE: "Select a file then press enter.",   
  NO_MATCH: "No file matches your query.",  
  SELECT_FILE_TO_LINK: "Select the file you want to insert the link for.",     
  TYPE_FILENAME: "Type name of drawing to select.",
  SELECT_FILE_OR_TYPE_NEW: "Select existing drawing or type name of a new drawing then press Enter.",
  SELECT_TO_EMBED: "Select the drawing to insert into active document.",
};
