import Card from "../card";

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="!flex-row flex-grow bg-[#ecedf0] items-center rounded-[20px]" style={{border: "1px solid #0b30e3" ,  boxShadow:"0 0 15px rgba(11, 48, 227, 0.7)"}}>
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full text-white  p-3 dark:bg-navy-700" style={{background:"linear-gradient(90deg, #0b30e3, #8300c0)"}}>
          <span className="flex items-center  dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium ">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
