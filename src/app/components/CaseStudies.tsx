import Link from "next/link";
import Image from "next/image";

export interface CaseStudy {
  slug: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
  title?: string;
}

const CaseStudies = ({
  caseStudies,
  title = "Case Studies",
}: CaseStudiesProps) => {
  return (
    <div className="row-holder">
      <h2 className="font-semibold text-[165%] m-0" id="case-studies">
        {title}
      </h2>
      <div className="flex justify-between mt-[2%] max-[1150px]:overflow-x-scroll max-[1150px]:mt-[4%]">
        {caseStudies.map(({ slug, title, imageUrl, imageAlt }) => (
          <div
            key={slug}
            className="cursor-pointer relative w-[32%] min-w-[275px] max-[1150px]:mr-[3%]"
          >
            <Link href={`/case-study/${slug}`} target="_blank">
              <span className="absolute top-0 left-0 w-full h-full z-[1]" />
            </Link>
            <div className="w-full h-[320px] max-[800px]:h-[250px] relative bg-black rounded-[9px] overflow-hidden">
              <Image
                src={imageUrl}
                alt={imageAlt ?? "Collabstr case study"}
                className="w-full h-full object-cover rounded-[8px] 
                [mask-image:linear-gradient(to_top,rgba(0,0,0,0.5)_10%,rgb(0,0,0))] 
                transition-transform duration-[400ms] ease-[cubic-bezier(0.17,0.67,0.13,1.02)]"
                fill
                loading="lazy"
              />
              <div className="absolute bottom-[8px] left-[8px] flex items-center">
                <div className="flex flex-col">
                  <h2 className="text-[130%] text-white font-medium px-[12px] py-[20px] m-0">
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
