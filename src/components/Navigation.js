import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import  "./navigation.module.css";
import img1 from "../img/item1.png"
import img2 from "../img/item2.png"
import img3 from "../img/item3.png"
import img4 from "../img/item4.png"
import img5 from "../img/item5.png"
import img6 from "../img/item6.png"
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions"


const Navigation = ({ show, handleClose, toggleShow }) => {





  const { width } = useWindowDimensions();
  const [links, setLinks] = useState([
    {
      name: "Statistics",
      icon: img1,
      isSelected: true,
      to: "/",
    },
    {
      name: "Dashboard",
      icon: img2,
      isSelected: false,
      to: "/dashboard",
    },
    {
      name: "Deposits",
      icon: img3,
      isSelected: false,
      to: "/deposits",
    },
    {
      name: "Withdraw",
      icon: img4,
      isSelected: false,
      to: "/withdrawn",
    },
    {
      name: "Matrix",
      icon: img5,
      isSelected: false,
      to: "/matrix",
    },
    {
      name: "Gift Nft",
      icon: img6,
      isSelected: false,
      to: "/giftnftt",
    },
  ]);

  const onSelect = (id) => {
    setLinks(
      links.map((link, index) => {
        if (index === id) return { ...link, isSelected: true };
        else return { ...link, isSelected: false };
      })
    );
  };



  const handleClick = () => {
    if (width <= 993) {
      toggleShow();
    } else return;
  };

  return (
    <>
   
      <Offcanvas
        show={width>=992?true:show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}

        
      >
        <Offcanvas.Body className="navMenu">
          <MdClose
            onClick={toggleShow}
            className="d-sm-none toggleButton"
          />
          <div className="navContainer">
            
            <img  alt="company logo" className="logo" />
    
            
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  to={link.to}
                  className="linksDecoration"
                  onClick={handleClick}
                >
                  <div
                    className=
                     " link isSelected ? styles.linkSelected : styles.link"
                    
                    onClick={() => onSelect(index)}
                  >
                    <img
                      src={link.icon}
                      alt="link icons"
                      className="icons"
                    />

                    <h5 className="navLinks">{link.name}</h5>
                  </div>
                 
                </Link>
              );
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
