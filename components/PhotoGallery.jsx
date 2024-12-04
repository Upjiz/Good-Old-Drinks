import Image from "next/image";

const PhotoGallery = () => {
  return (
    <section className="h-full relative xl:py-0 xl:p-20 mt-6 bg-gradient-to-t from-[#1D0808] via-[#112B2A] to-[#112B2A]  ">
      <div className="columns-3 md:columns-4 xl:columns-4 gap-2  md:p-6 lg:p-16 xl:p-16 ">
        <div className="break-inside-avoid mb-8 ">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1486947799489-3fabdd7d32a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8fDI%3D"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1512103865222-dcf9531c9961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWx8ZW58MHx8MHx8fDI%3D"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto w-full rounded-lg"
            src="https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
        <div className="break-inside-avoid mb-8">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
            alt="Gallery image"
            width={900}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
