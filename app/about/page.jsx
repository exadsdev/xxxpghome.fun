// app/about/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {

     const name = process.env.NEXT_PUBLIC_SITE_NAME || "PG Home";
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>เกี่ยวกับเรา</h2>
                        </div>
                        <div className="col-12">
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <Image src="/img/about.jpg" alt="เกี่ยวกับพีจีโฮม" width={500} height={300} />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>{name}</p>
                                <h2>ศูนย์รับสร้างบ้านและควบคุมคุณภาพงานก่อสร้าง</h2>
                            </div>

                            <div className="about-text">
                                <p>
                                    บริษัท พีจีโฮม จำกัด ให้บริการรับสร้างบ้านและดูแลควบคุมคุณภาพงานก่อสร้าง
                                    โดยเน้นมาตรฐานวิศวกรรม เทคนิคการก่อสร้าง และการคัดเลือกวัสดุก่อสร้างให้เป็นไปตามข้อตกลงในสัญญาอย่างชัดเจน
                                    เพื่อให้ลูกค้ามั่นใจในคุณภาพ ความแข็งแรง และความเรียบร้อยของงานในทุกขั้นตอน
                                </p>
                                <p>
                                    เราดูแลงานแบบครบวงจร ตั้งแต่ให้คำปรึกษา วางแผน ออกแบบ คำนวณโครงสร้าง ประสานงานเอกสารที่เกี่ยวข้อง
                                    ไปจนถึงการควบคุมงานก่อสร้างและตรวจรับก่อนส่งมอบ พร้อมบริการเสริมโดยไม่มีค่าใช้จ่ายเพิ่มเติมในขั้นตอนสำคัญ
                                    เช่น การขออนุญาตก่อสร้าง การยื่นขอสินเชื่อกับสถาบันการเงิน การขอมิเตอร์น้ำประปา–ไฟฟ้า และการขอบ้านเลขที่
                                    เพื่อช่วยลดภาระและเพิ่มความสะดวกให้ลูกค้า
                                </p>
                                <p>
                                    ด้วยประสบการณ์มากกว่า 13 ปี ผลงานส่งมอบแล้วกว่า 200 หลัง และทุนจดทะเบียน 5 ล้านบาท
                                    พีจีโฮมพร้อมให้บริการในพื้นที่ ราชบุรี นครปฐม และสมุทรสงคราม (รวมถึงพื้นที่ใกล้เคียงตามความเหมาะสม)
                                    โดยยึดหลักความโปร่งใส ตรวจสอบได้ และความรับผิดชอบเป็นสำคัญ
                                </p>

                                <a className="btn" href="/contact">
                                    ปรึกษาทีมงาน
                                </a>
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
                                        <i className="flaticon-worker"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">13+</h2>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-building"></i>
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
                                        <i className="flaticon-address"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">5M</h2>
                                        <p>Registered Capital (THB)</p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-crane"></i>
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
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                            พีจีโฮมให้บริการอะไรบ้าง?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            ให้บริการรับสร้างบ้าน ต่อเติม/ปรับปรุง ออกแบบบ้าน ตกแต่งภายใน ควบคุมคุณภาพงานก่อสร้าง (QC)
                                            รวมถึงช่วยประสานงานด้านเอกสาร เช่น ขออนุญาตก่อสร้าง และยื่นสินเชื่อกับสถาบันการเงิน
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                                            ให้บริการในพื้นที่ไหนบ้าง?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            ให้บริการหลักในพื้นที่ ราชบุรี นครปฐม และสมุทรสงคราม
                                            หากเป็นพื้นที่ใกล้เคียงสามารถติดต่อทีมงานเพื่อประเมินความเหมาะสมได้
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                                            ขั้นตอนเริ่มต้นต้องทำอย่างไร?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            เริ่มจากแจ้งความต้องการและงบประมาณเบื้องต้น จากนั้นทีมงานจะนัดหมายเพื่อประเมินหน้างาน/พื้นที่
                                            และสรุปแนวทาง พร้อมใบเสนอราคาและรายละเอียดงานตามขั้นตอน
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                                            ลูกค้าตรวจสอบรายการวัสดุได้หรือไม่?
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            ลูกค้าสามารถตรวจสอบรายละเอียดรายการวัสดุในแต่ละหมวดได้ เพื่อความชัดเจนและความมั่นใจว่าตรงตามข้อตกลงในสัญญา
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                                            มีการรับประกันงานหรือไม่?
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            มีการรับประกันงานก่อสร้างตามเงื่อนไขที่ระบุในสัญญา เพื่อความมั่นใจของลูกค้า
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div id="accordion-2">
                                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                                            สามารถปรับแบบบ้านให้เข้ากับพื้นที่ได้ไหม?
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            สามารถปรับแบบให้เหมาะกับพื้นที่และงบประมาณได้ โดยทีมออกแบบจะช่วยแนะนำทางเลือกที่เหมาะสม
                                            พร้อมสรุปรายละเอียดให้ตรวจสอบก่อนเริ่มงาน
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                                            พีจีโฮมช่วยเรื่องเอกสารได้อะไรบ้าง?
                                        </a>
                                    </div>
                                    <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            ช่วยประสานงานด้านเอกสารในขั้นตอนสำคัญ เช่น ขออนุญาตก่อสร้าง ยื่นสินเชื่อ การขอมิเตอร์น้ำประปา–ไฟฟ้า
                                            และการขอบ้านเลขที่ (ตามเงื่อนไขและขั้นตอนที่เกี่ยวข้อง)
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                                            ระยะเวลาก่อสร้างใช้เวลาประมาณเท่าไร?
                                        </a>
                                    </div>
                                    <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            ระยะเวลาก่อสร้างขึ้นอยู่กับขนาดบ้าน แบบบ้าน และเงื่อนไขหน้างาน
                                            ทีมงานจะประเมินและแจ้งแผนงานเบื้องต้นหลังสรุปรายละเอียดโครงการ
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInRight" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                                            มีบริการหลังการส่งมอบหรือไม่?
                                        </a>
                                    </div>
                                    <div id="collapseNine" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            มีทีมงานให้คำปรึกษาและดูแลหลังการส่งมอบ ตามขอบเขตและเงื่อนไขของบริษัท
                                        </div>
                                    </div>
                                </div>

                                <div className="card wow fadeInRight" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                                            ต้องการขอคำปรึกษาหรือประเมินราคา ติดต่ออย่างไร?
                                        </a>
                                    </div>
                                    <div id="collapseTen" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            สามารถติดต่อผ่านหน้า Contact ของเว็บไซต์ หรือช่องทางที่บริษัทระบุไว้ เพื่อรับคำปรึกษาและนัดหมาย
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
