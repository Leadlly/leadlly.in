'use client';
import 'core-js/full/promise/with-resolvers';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useState } from 'react';

const pdfURL = typeof window !== 'undefined' ? `${window.location.origin}/1.pdf` : '';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
	import.meta.url
).toString();

const maxWidth = 250;

const PdfViewer = () => {
	const [numPages, setNumPages] = useState<number>();
	const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
	const [containerWidth, setContainerWidth] = useState<number>();

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
		setNumPages(numPages);
	}

	return (
		<Document
			file={pdfURL}
			onLoadSuccess={onDocumentLoadSuccess}
		>
			{Array.from(new Array(numPages), (_el, index) => (
				<div
					key={`page_${index + 1}`}
					style={{
						overflow: 'hidden',
						borderRadius: '0.5rem',
						marginBottom: '0.2rem', // Optional: Add some space between pages
					}}
				>
					<Page
						pageNumber={index + 1}
						width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
					/>
				</div>
			))}
		</Document>
	);
};

export default PdfViewer;
