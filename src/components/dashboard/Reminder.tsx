import { Video } from "lucide-react";

const Reminder = () => {
  return (
    <div className="lg:col-span-2 lg:row-start-1 lg:row-end-3">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-donezo-border h-full">
        <h3 className="text-lg font-semibold text-donezo-text mb-4">
          Reminders
        </h3>
        <div className="mb-10">
          <h4 className="text-[28px] font-bold text-donezo-primary leading-tight mb-2 ">
            Meeting with Arc
            <br />
            Company
          </h4>
          <p className="text-base text-donezo-text-muted flex items-center gap-1">
            Time : 02.00 pm - 04.00 pm
          </p>
        </div>
        <button className="w-full flex items-center justify-center gap-3 bg-linear-to-b from-donezo-primary to-donezo-primary-dark text-white py-3.5 rounded-full font-medium cursor-pointer">
          <Video size={25} />
          <h3 className="text-lg">
          Start Meeting
          </h3>
        </button>
      </div>
    </div>
  );
};

export default Reminder;
