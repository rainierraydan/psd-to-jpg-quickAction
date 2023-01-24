//@include "jsx/json2.jsx";

var doc = app.activeDocument;
var docName = doc.name.replace(/\.(psd|psb|tiff|tif|jpg|jpeg|tga|gif)/, '.jpg');
var filePath = doc.fullName.fsName.replace(doc.name, docName);
var newFile = File(filePath);

var exportOptionsSaveForWeb = new ExportOptionsSaveForWeb();
    exportOptionsSaveForWeb.format = SaveDocumentType.JPEG;
    exportOptionsSaveForWeb.quality = 100;
    exportOptionsSaveForWeb.transparency = true;
    exportOptionsSaveForWeb.includeProfile = true;
    
app.activeDocument.exportDocument(
    newFile,
    ExportType.SAVEFORWEB,
    exportOptionsSaveForWeb
)

doc.close(SaveOptions.DONOTSAVECHANGES);