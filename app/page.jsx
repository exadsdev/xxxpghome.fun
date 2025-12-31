// app/components/HomePageClient.jsx
"use client";

import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePageClient() {
 const name = process.env.NEXT_PUBLIC_SITE_NAME || "PG Home";
  
  const assets = useMemo(
    () => ({
      carousel1: "/img/carousel-1.jpg",
      carousel2: "/img/carousel-2.jpg",
      carousel3: "/img/carousel-3.jpg",
      about: "/img/about.jpg",
      service1: "/img/service-1.jpg",
      service2: "/img/service-2.jpg",
      service3: "/img/service-3.jpg",
      service4: "/img/service-4.jpg",
      service5: "/img/service-5.jpg",
      service6: "/img/service-6.jpg",
      team1: "/img/team-1.jpg",
      team2: "/img/team-2.jpg",
      team3: "/img/team-3.jpg",
      team4: "/img/team-4.jpg",
    }),
    []
  );

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch(() => { });

    const modalEl = document.getElementById("videoModal");
    const iframeEl = document.getElementById("video");

    if (!modalEl || !iframeEl) return;

    const onShow = (event) => {
      const trigger = event.relatedTarget;
      const src = trigger?.getAttribute("data-bs-src");
      if (src) {
        iframeEl.setAttribute(
          "src",
          `${src}${src.includes("?") ? "&" : "?"}autoplay=1`
        );
      }
    };

    const onHidden = () => {
      iframeEl.removeAttribute("src");
    };

    modalEl.addEventListener("show.bs.modal", onShow);
    modalEl.addEventListener("hidden.bs.modal", onHidden);

    return () => {
      modalEl.removeEventListener("show.bs.modal", onShow);
      modalEl.removeEventListener("hidden.bs.modal", onHidden);
    };
  }, []);

  return (
    <div className="wrapper">
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src={assets.carousel1}
              alt="Carousel Image 1"
              width={1920}
              height={900}
              priority
              className="d-block w-100"
            />
            <div className="carousel-caption">
              <p className="animated fadeInRight">
                PG Home เว็บตรง 100% , PG Home ลิขสิทธิ์แท้ 100%
             
                ศูนย์รับสร้างบ้าน บริษัท พีจีโฮม จำกัด
              </p>
              <h1 className="animated fadeInLeft">
                ผู้ควบคุมคุณภาพงานก่อสร้างตามมาตรฐานวิศวกรรมและเทคนิคการก่อสร้าง
              </h1>
              <a className="btn animated fadeInUp" href="#contact">
                ขอรับคำปรึกษา / ประเมินราคา
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <Image
              src={assets.carousel2}
              alt="Carousel Image 2"
              width={1920}
              height={900}
              className="d-block w-100"
            />
            <div className="carousel-caption">
              <p className="animated fadeInRight">PG Home เว็บตรง 100% , PG Home โปรโมชั่นแรงๆ</p>
              <h1 className="animated fadeInLeft">
                ครบจบตั้งแต่ออกแบบ–ขออนุญาต–ยื่นกู้–ก่อสร้าง จนถึงส่งมอบ
              </h1>
              <a className="btn animated fadeInUp" href="#contact">
                ติดต่อทีมงาน
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <Image
              src={assets.carousel3}
              alt="Carousel Image 3"
              width={1920}
              height={900}
              className="d-block w-100"
            />
            <div className="carousel-caption">
              <p className="animated fadeInRight">โปร่งใส ตรวจสอบได้</p>
              <h1 className="animated fadeInLeft">
                ดูแลวัสดุและคุณภาพงานให้เป็นไปตามสัญญา เพื่อความสบายใจของลูกค้า
              </h1>
              <a className="btn animated fadeInUp" href="#contact">
                นัดหมายเข้าพบ
              </a>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
          aria-label="Previous"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
          aria-label="Next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="feature wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-worker" />
                </div>
                <div className="feature-text">
                  <h3>ทีมงานมีประสบการณ์</h3>

      <h3>PGhomeเว็บตรง100%  PGhomeลิขสิทธิ์แท้ 100% </h3>


                  <p>
                    ดูแลงานรับสร้างบ้านอย่างเป็นระบบ ตั้งแต่วางแผน ออกแบบ จนถึงส่งมอบ



                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-building" />
                </div>
                <div className="feature-text">
                  <h3>มาตรฐานงานและวัสดุ</h3>
                  <h3>PG homeบริการแบบมืออาชีพ  </h3>
                  <p>
                    คัดสรรวัสดุและควบคุมคุณภาพให้เป็นไปตามสัญญา โปร่งใสและตรวจสอบได้
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-call" />
                </div>
                <div className="feature-text">
                  <h3>ให้คำปรึกษาตลอดกระบวนการ</h3>
                  <h3>PG homeโปรโมชั่นแรงๆ PG homeพร้อมบริการ</h3>
                  <p>
                    มีทีมงานคอยแนะนำและประสานงานในทุกขั้นตอน เพื่อให้ลูกค้าตัดสินใจได้ง่ายขึ้น
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <Image
                  src={assets.about}
                  alt="About"
                  width={900}
                  height={700}
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left">
                <p>{name}</p>
                <h2>ประสบการณ์มากกว่า 13 ปี</h2>
              </div>

              <div className="about-text">
                <p>
                  ศูนย์รับสร้างบ้าน บริษัท พีจีโฮม จำกัด ให้บริการควบคุมคุณภาพงานก่อสร้างในด้านมาตรฐานวิศวกรรม
                  เทคนิคการก่อสร้าง และการคัดเลือกวัสดุก่อสร้างให้เป็นไปตามข้อตกลงในสัญญาอย่างชัดเจน โปร่งใส
                  และตรวจสอบได้
                </p>
                <p>
                  เรามีบริการเสริมโดยไม่มีค่าใช้จ่ายเพิ่มเติมในขั้นตอนสำคัญ เช่น การขออนุญาตก่อสร้าง การยื่นขอสินเชื่อกับสถาบันการเงิน
                  การขอมิเตอร์น้ำประปาและไฟฟ้า รวมถึงการขอบ้านเลขที่ เพื่อช่วยลดภาระและเพิ่มความสะดวกให้กับลูกค้า
                </p>
                <p>
                  ด้วยผลงานส่งมอบแล้วกว่า 200 หลัง และทุนจดทะเบียน 5 ล้านบาท พีจีโฮมพร้อมให้บริการในพื้นที่
                  ราชบุรี นครปฐม และสมุทรสงคราม โดยมุ่งเน้นคุณภาพ ความรับผิดชอบ และความพึงพอใจของลูกค้าเป็นหลัก
                </p>
                <Link className="btn" href="/about">
                  ดูรายละเอียดเพิ่มเติม
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fact">
        <div className="container-fluid">
          <div className="row counters">
            <div className="col-md-6 fact-left wow slideInLeft">
              <div className="row">
                <div className="col-6">
                  <div className="fact-icon">
                    <i className="flaticon-worker" />
                  </div>
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">13+</h2>
                    <p>Years of Experience</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="fact-icon">
                    <i className="flaticon-building" />
                  </div>
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">200+</h2>
                    <p>Completed Homes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 fact-right wow slideInRight">
              <div className="row">
                <div className="col-6">
                  <div className="fact-icon">
                    <i className="flaticon-address" />
                  </div>
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">5M</h2>
                    <p>Registered Capital (THB)</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="fact-icon">
                    <i className="flaticon-crane" />
                  </div>
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">3</h2>
                    <p>Service Areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Services</p>
            <h2>บริการของเรา</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item">
                <div className="service-img">
                  <Image
                    src={assets.service1}
                    alt="Service 1"
                    width={900}
                    height={650}
                    className="img-fluid"
                  />
                  <div className="service-overlay">
                    <p>
                      รับสร้างบ้านแบบครบวงจร ตั้งแต่วางแผน ออกแบบ ควบคุมงานก่อสร้าง
                      ไปจนถึงส่งมอบบ้านตามสัญญา
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>รับสร้างบ้าน</h3>
                  <Link className="btn" href="/services">
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-img">
                  <Image
                    src={assets.service2}
                    alt="Service 2"
                    width={900}
                    height={650}
                    className="img-fluid"
                  />
                  <div className="service-overlay">
                    <p>
                      งานต่อเติมและปรับปรุงบ้าน โดยคำนึงถึงความแข็งแรง ความปลอดภัย
                      และการใช้งานจริงในระยะยาว
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>ต่อเติม / ปรับปรุง</h3>
                  <Link className="btn" href="/services">
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item">
                <div className="service-img">
                  <Image
                    src={assets.service3}
                    alt="Service 3"
                    width={900}
                    height={650}
                    className="img-fluid"
                  />
                  <div className="service-overlay">
                    <p>
                      ออกแบบบ้านและวางผังใช้งานให้เหมาะกับพื้นที่และงบประมาณ
                      พร้อมคำแนะนำที่เข้าใจง่ายและตรวจสอบได้
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>ออกแบบบ้าน</h3>
                  <Link className="btn" href="/services">
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-img">
                  <Image
                    src={assets.service4}
                    alt="Service 4"
                    width={900}
                    height={650}
                    className="img-fluid"
                  />
                  <div className="service-overlay">
                    <p>
                      ออกแบบตกแต่งภายในให้เหมาะกับไลฟ์สไตล์ เน้นความสวยงาม ฟังก์ชัน
                      และการใช้งานจริง
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>ตกแต่งภายใน</h3>
                  <Link className="btn" href="/services">
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item">
                <div className="service-img">
                  <Image
                    src={assets.service5}
                    alt="Service 5"
                    width={900}
                    height={650}
                    className="img-fluid"
                  />
                  <div className="service-overlay">
                    <p>
                      ให้คำปรึกษาและช่วยประสานงานด้านเอกสารสำคัญ เช่น ขออนุญาตก่อสร้าง
                      และการยื่นสินเชื่อกับสถาบันการเงิน
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>เอกสาร / ขออนุญาต / ยื่นกู้</h3>
                  <Link className="btn" href="/services">
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-img">
                  <Image
                    src={assets.service6}
                    alt="Service 6"
                    width={900}
                    height={650}
                    className="img-fluid"
                  />
                  <div className="service-overlay">
                    <p>
                      ควบคุมและตรวจสอบคุณภาพงาน รวมถึงรายการวัสดุให้ตรงตามสัญญา
                      เพื่อความมั่นใจของลูกค้า
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>ควบคุมคุณภาพ (QC)</h3>
                  <Link className="btn" href="/services">
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <button
            type="button"
            className="btn-play"
            data-bs-toggle="modal"
            data-bs-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
            data-bs-target="#videoModal"
            aria-label="Play video"
          >
            <span />
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="ratio ratio-16x9">
                <iframe
                  id="video"
                  title="Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Team</p>
            <h2>ทีมงานของเรา</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="team-img">
                  <Image
                    src={assets.team1}
                    alt="Team 1"
                    width={600}
                    height={600}
                    className="img-fluid"
                  />
                </div>
                <div className="team-text">
                  <h2>ทีมบริหารโครงการ</h2>
                  <p>Project Management</p>
                </div>
                <div className="team-social">
                  <Link className="social-tw" href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="social-fb" href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="social-li" href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link className="social-in" href="#" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-item">
                <div className="team-img">
                  <Image
                    src={assets.team2}
                    alt="Team 2"
                    width={600}
                    height={600}
                    className="img-fluid"
                  />
                </div>
                <div className="team-text">
                  <h2>ทีมวิศวกร</h2>
                  <p>Engineering Team</p>
                </div>
                <div className="team-social">
                  <Link className="social-tw" href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="social-fb" href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="social-li" href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link className="social-in" href="#" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="team-img">
                  <Image
                    src={assets.team3}
                    alt="Team 3"
                    width={600}
                    height={600}
                    className="img-fluid"
                  />
                </div>
                <div className="team-text">
                  <h2>ทีมสถาปนิก / ออกแบบ</h2>
                  <p>Design Team</p>
                </div>
                <div className="team-social">
                  <Link className="social-tw" href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="social-fb" href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="social-li" href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link className="social-in" href="#" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-item">
                <div className="team-img">
                  <Image
                    src={assets.team4}
                    alt="Team 4"
                    width={600}
                    height={600}
                    className="img-fluid"
                  />
                </div>
                <div className="team-text">
                  <h2>ทีมช่าง / หน้างาน</h2>
                  <p>Construction Crew</p>
                </div>
                <div className="team-social">
                  <Link className="social-tw" href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link className="social-fb" href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link className="social-li" href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link className="social-in" href="#" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faqs">
        <div className="container">
          <div className="section-header text-center">
            <p>Frequently Asked Question</p>
            <h2>คำถามที่พบบ่อย</h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div id="accordion-1">
                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                    >
                      พีจีโฮมให้บริการอะไรบ้าง?
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="card-body">
                      ให้บริการรับสร้างบ้าน งานต่อเติม/ปรับปรุง ออกแบบบ้าน
                      ตกแต่งภายใน ควบคุมคุณภาพงานก่อสร้าง (QC) รวมถึงช่วยประสานงานด้านเอกสาร
                      เช่น ขออนุญาตก่อสร้าง และยื่นสินเชื่อกับสถาบันการเงิน
                    </div>
                  </div>
                </div>

                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                    >
                      ทำไมควรเลือกพีจีโฮม?
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="card-body">
                      เรามีประสบการณ์มากกว่า 13 ปี พร้อมผลงานส่งมอบกว่า 200 หลัง
                      ดูแลโดยทีมงานที่มีประสบการณ์ เน้นความโปร่งใส ตรวจสอบได้ และควบคุมคุณภาพให้เป็นไปตามสัญญา
                    </div>
                  </div>
                </div>

                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                    >
                      มีการรับประกันงานหรือไม่?
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="card-body">
                      มีการรับประกันงานก่อสร้างตามเงื่อนไขที่ระบุในสัญญา
                      เพื่อความมั่นใจของลูกค้า
                    </div>
                  </div>
                </div>

                <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                    >
                      สามารถดูผลงานตัวอย่างได้ที่ไหน?
                    </button>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="card-body">
                      สามารถดูผลงานได้ที่หน้า Portfolio / Projects และสอบถามรายละเอียดเพิ่มเติมกับทีมงานได้โดยตรง
                    </div>
                  </div>
                </div>

                <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                    >
                      มีบริการหลังการส่งมอบหรือไม่?
                    </button>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="card-body">
                      มีทีมงานให้คำปรึกษาและดูแลหลังการส่งมอบ ตามขอบเขตและเงื่อนไขของบริษัท
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div id="accordion-2">
                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                    >
                      ให้บริการพื้นที่ไหนบ้าง?
                    </button>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    data-bs-parent="#accordion-2"
                  >
                    <div className="card-body">
                      เราให้บริการหลักในพื้นที่ ราชบุรี นครปฐม และสมุทรสงคราม
                      หากเป็นพื้นที่ใกล้เคียงสามารถติดต่อทีมงานเพื่อประเมินความเหมาะสมได้
                    </div>
                  </div>
                </div>

                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                    >
                      ขั้นตอนเริ่มต้นต้องทำอย่างไร?
                    </button>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    data-bs-parent="#accordion-2"
                  >
                    <div className="card-body">
                      เริ่มจากแจ้งความต้องการและงบประมาณเบื้องต้น จากนั้นทีมงานจะนัดหมายเพื่อประเมินหน้างาน/พื้นที่
                      และสรุปแนวทาง พร้อมใบเสนอราคาและรายละเอียดงานตามขั้นตอน
                    </div>
                  </div>
                </div>

                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                    >
                      สามารถปรับแบบบ้านให้เข้ากับพื้นที่ได้ไหม?
                    </button>
                  </div>
                  <div
                    id="collapseEight"
                    className="collapse"
                    data-bs-parent="#accordion-2"
                  >
                    <div className="card-body">
                      สามารถปรับแบบให้เหมาะกับพื้นที่และงบประมาณได้ โดยทีมออกแบบจะช่วยแนะนำทางเลือกที่เหมาะสม
                      พร้อมสรุปรายละเอียดให้ตรวจสอบก่อนเริ่มงาน
                    </div>
                  </div>
                </div>

                <div className="card wow fadeInRight" data-wow-delay="0.4s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                    >
                      ลูกค้าตรวจสอบรายการวัสดุได้หรือไม่?
                    </button>
                  </div>
                  <div
                    id="collapseNine"
                    className="collapse"
                    data-bs-parent="#accordion-2"
                  >
                    <div className="card-body">
                      ลูกค้าสามารถตรวจสอบรายละเอียดรายการวัสดุในแต่ละหมวดได้ เพื่อความชัดเจนและความมั่นใจว่าตรงตามข้อตกลงในสัญญา
                    </div>
                  </div>
                </div>

                <div className="card wow fadeInRight" data-wow-delay="0.5s">
                  <div className="card-header">
                    <button
                      className="card-link collapsed btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="false"
                    >
                      ติดต่อทีมงานได้ช่องทางไหน?
                    </button>
                  </div>
                  <div
                    id="collapseTen"
                    className="collapse"
                    data-bs-parent="#accordion-2"
                  >
                    <div className="card-body">
                      สามารถติดต่อผ่านหน้า Contact หรือช่องทางที่บริษัทระบุไว้บนเว็บไซต์ เพื่อรับคำปรึกษาและนัดหมาย
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Anchor for hero buttons */}
          <div id="contact" style={{ height: 1 }} />
        </div>
      </div>
    </div>
  );
}
