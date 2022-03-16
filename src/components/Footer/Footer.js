import "./footer.css";

const Footer =()=>{
  return (  <footer className="flex-column footer">
    <div className="footer-items">
        <h4>Made with 💜 by Prabhav Sharma</h4>
        <div className="footer-links flex-row">
            <a target="_blank"  href="https://github.com/Prabhav-Sharma"><img className="icon" src="https://res.cloudinary.com/carsmart/image/upload/v1647404724/icons/github-1_lbfzgs.png"/></a>
            <a target="_blank"  href="https://www.linkedin.com/in/prabhav-sharma-a2180b1b0/"><img className="icon"
                    src="https://res.cloudinary.com/carsmart/image/upload/v1647404724/icons/linkedin_yp3s1d.png"/></a>
            <a target="_blank"  href="https://twitter.com/Prabhavsharmaa"><img className="icon" src="https://res.cloudinary.com/carsmart/image/upload/v1647404723/icons/twitter_wygajc.png"/></a>
        </div>
        <p className="para-m text-gray text-center">@CarSmart</p>
    </div>
</footer>)
}

export default Footer;