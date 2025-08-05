import Image from "next/image";
import img1 from "../assets/MansoryPhoto/1.jpg";
import img2 from "../assets/MansoryPhoto/2.jpg";
import img3 from "../assets/MansoryPhoto/3.jpg";
import img4 from "../assets/MansoryPhoto/4.jpg";
import img5 from "../assets/MansoryPhoto/5.jpg";
import img6 from "../assets/MansoryPhoto/6.jpg";
import img7 from "../assets/MansoryPhoto/7.jpg";
import img8 from "../assets/MansoryPhoto/8.jpg";
import img9 from "../assets/MansoryPhoto/9.jpg";
import img10 from "../assets/MansoryPhoto/10.jpg";
import img11 from "../assets/MansoryPhoto/11.jpg";
import img12 from "../assets/MansoryPhoto/12.jpg";

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
              src={img1}
              alt="1"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={img2}
              alt="2"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={img3}
              alt="3"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="rounded-lg"
              src={img4}
              alt="4"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={img5}
              alt="5"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={img6}
              alt="6"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="rounded-lg"
              src={img7}
              alt="7"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={img8}
              alt="8"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={img9}
              alt="9"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="rounded-lg"
              src={img10}
              alt="10"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={img11}
              alt="11"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={img12}
              alt="12"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
