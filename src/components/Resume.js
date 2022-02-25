import React from "react";
import Typewriter from "typewriter-effect";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    return (
        <>
            <div className="resume-containerl1">
                <h1 className="page-header">
                    <Typewriter
                        onInit={(typewriter)=> {
                        typewriter
                        .typeString("My Resume.")
                        .start();
                        }}
                    /> 
                </h1>
                <p>
                    My most up-to-date resume. 📑
                </p>
                <hr />
                <p>
                    Here is a direct link to my <a href="/resume.pdf" target="_blank">resume</a>. Feel free to take a look!
                </p>
            </div>
            <div className="resume-containerl2">
                <div className="resume-pdf">
                    <Document file="/resume.pdf">
                        <Page className="resume-pdf__Page__canvas" pageNumber={1} />
                    </Document>
                </div>
            </div>
        </>
    )
}

export default Resume;