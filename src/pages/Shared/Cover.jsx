import { Parallax} from 'react-parallax';

const Cover = ({ img ,title,description}) => {
  return (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         
      <div
        className="hero h-[600px]"

      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-[#15151599] py-10 px-20">
            <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
            <p className="mb-5 font-semibold text-xl uppercase">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
   
  );
};

export default Cover;
