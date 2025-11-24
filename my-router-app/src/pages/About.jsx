import ReactLogo from '../assets/react.svg'
import about from '../pages/About.module.css'


const About = () => {
    return(
        <>

        <div className="container">
            <div className="row">
                <h1 className={about.heading}>About Us</h1>
                <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab minus non magni ut nisi, corrupti magnam, officia facilis tempore impedit dicta aut repellat nostrum architecto. Iste mollitia accusantium quasi!
                    Debitis quia velit vero aliquam ipsum veritatis, consequatur maxime recusandae cupiditate deserunt? At, nihil voluptas, ipsa explicabo ea culpa quos ducimus, aut nesciunt sit voluptate officiis doloribus molestiae nulla eum?
                    Fuga aspernatur est corrupti sapiente vel nulla tempora, et laborum architecto cupiditate atque, fugiat quidem! Velit aspernatur laboriosam temporibus dignissimos soluta libero nulla cumque placeat recusandae nisi. Corrupti, placeat nisi.
                    Blanditiis nobis reprehenderit corrupti accusamus placeat quis quibusdam hic iusto ipsam aliquid assumenda praesentium sed pariatur vero, ea non. Voluptate velit accusamus itaque in molestias sunt explicabo dolorem fugiat maxime?
                    Incidunt quasi doloremque magni ratione suscipit doloribus deleniti aut eos quos molestias aliquid enim, provident maiores ad accusantium iste aperiam asperiores corporis similique at facilis laborum dolore officiis earum? Facere?</p>
                </div>
                <div className="col-md-6">
                    <img src={ReactLogo} alt="" className='w-100 img-fluid' />
                </div>
            </div>
        </div>
        
        </>
    );
};
export default About;