import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
//Import Components
import AboutUs from "../components/contentBlock/AboutUs";
import Appointment from "../components/contentBlock/Appointment";
import Counter from "../components/contentBlock/Counter";

import Section from "../components/contentBlock/Section";
import Services from "../components/contentBlock/Services";
import SectionTitle from "../components/SectionTitle";
import ReviewsSlider from "../components/ReviewsSlider";

const Index = () => {
    const reviews = [
        {
            id: 1,
            name: "Володимир",
            desc: "Нашій донечці у 2019 році лікарі поставили діагноз сколіоз ІІ ступеня. А ми думали, що це звичайна сутулість. Нам  призначили корсет Шено, виконання спеціальних вправ, плавання та масаж. Дякую Богу, що ми знайшли справжніх спеціалістів. В нас зараз це вже четвертий корсет і результат видно і на рентген-знімках, і візуально.",
            rating: 5,
        },
        {
            id: 2,
            name: "Оксана",
            desc: "Моєму сину діагностували сколіоз 2 ступеня, на звичайному шкільному медогляді. Звичайно, ми обрали корсетотерапію, адже оперативне втручання було крайнім варіантом. Привчити його носити корсет - було нелегко, але через 2 місяці, лікарський висновок потішив і мене, і його.  Ми добавили плавання,  і зараз взяли курс на повне одужання.",
            rating: 4.5,
        },
        {
            id: 3,
            name: "Василь",
            desc: "Коли ти водиш автомобіль купу років, ти можеш назбирати цілий букет хвороб. Так я і отримав свій кіфоз, з болями та шаленим дискомфортом. В результаті  корсетотерапії вже через місяць про болі призабув. Рекомендую!",
            rating: 5,
        },
        {
            id: 4,
            name: "Катерина",
            desc: "Я отримала травму спини ще в дитинстві на художній гімнастиці. А відчула її у 36, діагностували кіфоз з ускладненнями і початок утворення грижі. Мене прооперували,а відновитися допоміг Косрет-захід, який виготовив мені корсет Шено. Реабілітація була довгою, але через півроку спина рівна.І я знову живу повноцінним життям.",
            rating: 5,
        },
        {
            id: 5,
            name: "Андрій",
            desc: "Дуже задоволений роботою спеціалістів Корсет Західб підходять до своєї роботи дуже віжповідально, вже два роки користуюсь їх послугами і реально бачу в доньки результат. Дякую Корсет Захід.",
            rating: 5,
        },
        {
            id: 6,
            name: "Христина",
            desc: "Корсет Шено просто супер, результат дуже крутий!",
            rating: 5,
        },
        {
            id: 7,
            name: "Ольга",
            desc: "Замовила корсет Шено, все супер. Ношу з задоволенням, якісна річ, яка виправдовує свою ціну!",
            rating: 5,
        },
    ];
    return (
        <>
            <Section />
            <Appointment />
            <section className="section">
                <AboutUs />
                <Services />
            </section>
            <Counter />
            <section className="section pt-0">
                <Container className="">
                    {/* section title */}
                    <SectionTitle title="Відгуки наших клієнтів" />

                    {/* clients slider */}
                    <ReviewsSlider
                        reviews={reviews}
                        colClass="mt-5"
                        className="mt-100"
                    />
                    <section className="mb-5 d-flex align-items-center flex-column">
                        <div className="mt-4">
                            <Link href="/contacts" className="btn btn-primary">
                                Написати коментар
                            </Link>
                        </div>
                    </section>
                </Container>
            </section>

            {/* <Popup /> */}
        </>
    );
};
export default Index;
