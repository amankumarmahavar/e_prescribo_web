
function popup(downloadURL){
    pdfjsLib.getDocument(downloadURL).promise.then(pdf => {
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            pdf.getPage(pageNumber).then(page => {
                const scale = 1; // Adjust the scale as needed
                const viewport = page.getViewport({ scale });
    
                const canvas = document.createElement('canvas');
    
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvas.classList.add("pop-up")
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext).promise.then(() => {
                    document.getElementById("mainContainer").style.display = "block";
                    mainContainer.appendChild(canvas);
                });
            });
        }
    });
}