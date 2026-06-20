import { HiOutlineTv } from "react-icons/hi2";
import { MdOutlineDownloadForOffline, } from "react-icons/md";
import { FaRegFaceSmile } from "react-icons/fa6";
import { TbDeviceTvOld } from "react-icons/tb";
import ReasonCard from "./ReasonCard";

function Reasons(){
    const reasons=[
        {
      id: 1,
      title: "Enjoy on your TV",
      description:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV and more.",
      Icon: HiOutlineTv,
    },

    {
      id: 2,
      title: "Download your shows",
      description:
        "Save your favourites easily and always have something to watch.",
      Icon: MdOutlineDownloadForOffline,
    },

    {
      id: 3,
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      Icon: TbDeviceTvOld,
    },

    {
      id: 4,
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favourite characters.",
      Icon: FaRegFaceSmile,
    },
    ];

    return (
        <section className="reasons-section">
            <h2 className="section-title">
                More reasons to join
            </h2>

            <div className="reasons-grid">
                {reasons.map((reason)=>(
                    <ReasonCard key={reason.id}
                    title={reason.title}
                    description={reason.description}
                    Icon={reason.Icon}
                    />
                ))}
            </div>
        </section>
    )
}

export default Reasons;