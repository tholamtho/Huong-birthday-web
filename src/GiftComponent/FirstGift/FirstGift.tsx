import React, { useEffect, useState } from "react";
import p1 from "../../image/portrait/P1.jpg";
import p2 from "../../image/portrait/P2.jpg";
import p3 from "../../image/portrait/P3.jpg";
import p4 from "../../image/portrait/P4.jpg";
import p5 from "../../image/portrait/P5.jpg";
import p6 from "../../image/portrait/P6.jpg";
import p7 from "../../image/portrait/P7.jpg";
import p8 from "../../image/portrait/P8.jpg";
import p9 from "../../image/portrait/P9.jpg";
import p10 from "../../image/portrait/P10.jpg";
import "./first.css";
import { Button } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

export const FirstGift = ({ isShown }) => {
  const imageArray: string[] = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
  const textArray: string[] = [
    "Đầu tiên thì chúc em luôn vui như trên ảnh ạ =))) Cười nhiều lên nha",
    "Thứ hai thì dồi dào sức khỏe nha ạ",
    "Mãi cute này",
    "Nhấn mạnh là luôn cute ạ :v",
    "Không bị deadline dí",
    "Nhiều tiền để còn đưa tui đi chơi ké ạ =)))",
    "Tăng cân thành công này",
    "Vui vẻ hạnh phúc này,",
    "Không ngủ quên này -.-",
    "Và mãi iu tui ạ =)))) (cái này quan trọng nha)",
    "Hết ảnh dồi ạ :V",
  ];
  const [curentItem, setCurrentItem] = useState<number>(0);
  const [isOver, setIsOver] = useState<boolean>(false);
  useEffect(() => {
    setIsOver(false);
    setCurrentItem(0);
  }, [isShown]);
  const handlePrevious = () => {
    setCurrentItem(curentItem - 1 > 0 ? curentItem - 1 : 0);
  };
  const handleNext = () => {
    setCurrentItem(
      curentItem + 1 < imageArray.length ? curentItem + 1 : imageArray.length
    );
  };

  const handleClose = () => {
    setIsOver(true);
  };
  return isShown && !isOver ? (
    <div className="first-gift">
      <h1 className="fg-title">Món quà đầu tiên</h1>

      <Button className="previous-btn" onClick={handlePrevious}>
        <LeftCircleOutlined />
      </Button>
      <div className="fg-body">
        <img
          className="potrait-image"
          src={imageArray[curentItem]}
          alt=""
          width={300}
          height={400}
        />
      </div>
      <Button className="next-btn" onClick={handleNext}>
        <RightCircleOutlined />
      </Button>
      <h1 className="birthday-text">{textArray[curentItem]} </h1>
      {curentItem === imageArray.length ? (
        <Button className="over-btn" onClick={handleClose}>
          Quay về chỗ phát quà :V
        </Button>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  );
};
