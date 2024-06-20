import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import Modal from "./Modal";
import { useState } from "react";

type Props = {
  imageUrl: string;
  children: React.ReactNode;
};

export default function ImageCard({ imageUrl, children }: Props) {
  const cloudName = import.meta.env.CLOUDINARY_CLOUD;
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudName,
    },
  });
  const image = cld.image(imageUrl);
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <figure
        className="w-full overflow-hidden rounded-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-main transition-all duration-300"
        // onClick={() => setModalVisible(true)}
      >
        <AdvancedImage cldImg={image} />
        <div className="border-t-2 border-black flex flex-col p-2">
          {children}
        </div>
      </figure>
      {/* <Modal active={modalVisible} setActive={setModalVisible}>
        <AdvancedImage cldImg={image} />
        <div className="flex flex-col w-full items-start p-2">{children}</div>
      </Modal> */}
    </>
  );
}
