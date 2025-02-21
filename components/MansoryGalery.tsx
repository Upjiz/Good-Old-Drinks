import Image from "next/image";

export default function Gallery() {
  return (
    <section
      id="realisation"
      className="bg-gradient-to-t from-[#1D0808] via-[#112B2A] to-[#112B2A] p-8"
    >
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-4 container ">
        <div className="grid gap-4">
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1470339128399-7ecf082f72ab?w=500&auto=format&fit=crop&q=60&"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1486947799489-3fabdd7d32a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8fDI%3D"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1512103865222-dcf9531c9961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWx8ZW58MHx8MHx8fDI%3D"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJhcnxlbnwwfHwwfHx8Mg%3D%3D"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvY2t0YWlsfGVufDB8fDB8fHwy"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="rounded-lg"
              src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1715819337/content-items/015/378/611/AA0BAR0ART0DECO_Escena5--original.png?1715819337"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://images.ctfassets.net/1aemqu6a6t65/8aJtC4pjYZHQ6zQNShHiH/51c79793572d9318581157a903d4f2ee/patent-pending-img_8585"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1540224769541-7e6e20a42330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://www.niococktails.fr/cdn/shop/articles/NIO_Cocktails_speakeasy.png?v=1615926441"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1597241693839-07d7fb803af1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyJTIwY29ja3RhaWx8ZW58MHx8MHx8fDI%3D"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
