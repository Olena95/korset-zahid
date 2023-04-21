import React, { useState } from "react";
import Link from "next/link";
import PagesHeading from "@/components/PagesHeading";
import WorkProcess from "@/components/WorkProcess";
import { Col, Container, Row, Card } from "react-bootstrap";

const Services = () => {
  const [open, setOpen] = useState(false);
  const blogs = [
    {
      id: 1,
      image: "/images/x-ray-photo.jpg",
      title: "Діагностика",
      desc: "З багаторічного досвіду можемо сказати,  що здебільшого пацієнти звертаються до нас після хірургічного обстеження з готовим направленням на корсет Шено. Далі беруться до роботи наші фахівці: проводять сканування тіла за допомогою 3D-сканера та, використовуючи спеціальне програмне забезпечення створюють 3D-модель майбутнього корсета. Готовий корсет остаточно підганяється ортезистами під пацієнта. Для отримання позитивної динаміки ми рекомендуємо пацієнту додаткові заходи:  лікувальну фізкультуру, масаж  і наступні консультації з корекцію або заміною корсету, опираючись на ріст та фізіологічні зміни.",
    },
    {
      id: 2,
      image: "/images/doctor.jpg",
      title: "Лікування",
      desc: "Сьогодні основними факторами успіху консервативного лікування сколіозу є: вчасна діагностика, правильність призначення та конструкція виготовлення корсета,  регулярні  курси лікувальної гімнастики та масажу, динамічне спостереження. Після 1,5 - 2 місяці з початку носіння корсета пацієнт має зробити контрольний рентген знімок та приїхати до нас на можливе коригування. Далі пацієнт перебуває під наглядом у свого лікуючого лікаря до наступної заміни корсета приблизно  6-12 місяців.",
    },
    {
      id: 3,
      image: "/images/company/about3.jpg",
      title: "Виготовлення",
      desc: "Ми виготовляємо корсет Шено у Львові лише за індивідуальним  замовленням із термопластичних матеріалів за результатами рентгена, 3D-сканування тіла пацієнта або індивідуальним гіпсовим зліпком. Орієнтовне виготовлення корсета триває від 1 до 3 тижнів, а при необхідності 1-2 дні. Примірка-видача корсетика - 40 хв",
    },
    {
      id: 4,
      image: "/images/doctor2.jpg",
      title: "Консультація",
      desc: "Пацієнт обов'язково повинен мати при собі рентген знімки у прямій та боковій проекціях. Наші  фахівці методом 3D сканування знімуть заміри, (тривалість 30-60 секунд). Записатись на консультацію можна за телефоном або залишити заявку на сайті і наш менеджер зконтактує з вами.",
    },
  ];

  return (
    <>
      <PagesHeading title="Послуги" />

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="section">
        <Container>
          <Row>
            {blogs.map((blog, key) => (
              <Col lg={12} xs={12} key={key} className="mb-4 pb-2">
                <Card className="blog rounded border-0 shadow overflow-hidden">
                  <Row className="align-items-center g-0">
                    <Col md={4}>
                      <img
                        src={blog.image}
                        className="img-fluid"
                        alt="Landrick"
                      />
                      <div className="overlay bg-dark"></div>
                      <div className="author">
                        <small className="text-light user d-block">
                          <i className="uil uil-user"></i> {blog.autor}
                        </small>
                        <small className="text-light date">
                          <i className="uil uil-calendar-alt"></i> {blog.date}
                        </small>
                      </div>
                    </Col>

                    <Col md={8}>
                      <Card.Body className="content">
                        <h5 className="text-center">
                          <Link
                            href="#"
                            className="card-title title text-dark "
                          >
                            {blog.title}
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">{blog.desc}</p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section">
        <WorkProcess />
      </section>
      <section className="mb-5 d-flex align-items-center flex-column">
        <h3>Потрібна консультація?</h3>
        <div className="mt-4">
          <Link href="/contacts" className="btn btn-primary">
            Записатися
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
