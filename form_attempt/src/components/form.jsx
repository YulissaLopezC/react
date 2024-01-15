import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Form = () => {
    return(
        <div className="w-96 h-96 border border-indigo-600 ...">
            <h2>Create Account</h2>
            <p>Enter your personal details and start journey with us</p>
            <div>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faGithub} /> 
            </div>
            <p>or use your email for registration</p>
            <form action="#" method='post'>
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" name="user_name" />
                        </li>
                        <li>
                            <label htmlFor="mail">Email: </label>
                            <input type="email" id="mail" name="user_mail" />
                        </li>
                        <li>
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" name="user_pass" />
                        </li>
                        <li>
                            <button type="submit">Register</button>
                        </li>
                    </ul>
                </fieldset>
            </form>

            
        </div>
    )
}

export default Form