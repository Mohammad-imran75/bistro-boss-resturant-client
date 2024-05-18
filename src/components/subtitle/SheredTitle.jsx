

const SheredTitle = ({subHeading,heading}) => {
    return (
        <div className="lg:w-3/12 mx-auto text-center my-8 mt-10">
            <p className="text-[#D99904] mb-2">{subHeading}</p>
            <h3 className="text-3xl font-semibold uppercase border-y-4 py-4" >{heading}</h3>
        </div>
    );
};

export default SheredTitle;