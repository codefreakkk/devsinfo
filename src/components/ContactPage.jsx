import React from "react";
import Navbar from "./Navbar";
import "../css/style.css";
import ContactComponent from "./ContactComponent";
import Sidebar from "./Sidebar";

function ContactPage() {
  return (
    <>
      <Sidebar/>
      <div className="home">
        <Navbar />
        
        <div className="contain_container">
        <div className="mb-4 mt-5 p_heading">Contact Information</div>
          <div class="project_grid">
            <div class="row row-cols-sm-2">
              <div class="col">
                <ContactComponent/>
              </div>
              <div class="col">
                <ContactComponent/>
              </div>
              <div class="col">
                <ContactComponent/>
              </div>
              <div class="col">
                <ContactComponent/>
              </div>
              <div class="col">
                <ContactComponent/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
