export default function About() {
    return (
        <section className="container flex flex-col lg:flex-row items-stretch gap-8 py-12">
                <div className="w-full md:w-4/5">

                    <img src="./images/place-1.jpg" className="min-w-full min-h-full object-cover" alt="" />
                </div>
                <div className="mt-4">
                    <span className="font-poppins font-bold text-xs text-gray-500">About Us</span>
                    <p className="font-cotoris text-2xl text-white max-w-8xl">At Maiz, we believe that food is more than just sustenance—it&apos;s an experience that brings people together. Our chefs use only the freshest, locally-sourced ingredients to craft dishes that not only satisfy the palate but also tell a story of tradition, love, and culture. Each plate is a harmonious blend of time-honored recipes and contemporary culinary techniques, designed to provide you with an unforgettable dining experience.
                    </p>
                    <br />
                    <p className="font-cotoris text-2xl text-white max-w-8xl">
                    Whether you&apos;re here for a casual meal with friends, a romantic dinner, or a special celebration, our warm and welcoming atmosphere makes Maiz the perfect place to relax and enjoy exceptional food. We invite you to explore our menu, indulge in our signature dishes, and discover why Maiz has become a beloved destination for food enthusiasts.
                    </p>
                    <br />
                </div>
        </section>
    )
}