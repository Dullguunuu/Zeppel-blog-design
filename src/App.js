import './App.css';

const menuNav = ["PORTFOLIO", "BLOG", "CV", "STORE", "FREELANCE", " ABOUT ME", "CONTACT"]
const selectionNav = ["All", "UI Design", "UX Design", "Product Design", "Articles", "Tutorials", "News"]
const cards = []

for (let i = 0; i < 6; i++) {
  if (i % 2 != 0) {
    cards.push(
      <div className='cards'>
        <img src={require("./images/iMac.png")} alt="" />
        <p className='cardDate'> NOV 23 2020</p>
        <h3 className='cardTitle'>This way is wrong about UI Design.</h3>
        <p className='cardDescrip'>A quick guide to assisting users in the challenging steps from learning
          about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. </p>
        <a href='#' className='cardLink'>READ MORE</a>
      </div>
    )
  }
  else {
    cards.push(
      <div className='cards'>
        <img src={require("./images/macbook.png")} alt="" />
        <p className='cardDate'> NOV 23 2020</p>
        <h3 className='cardTitle'>This way is wrong about UI Design.</h3>
        <p className='cardDescrip'>A quick guide to assisting users in the challenging steps from learning
          about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. </p>
        <a href='#' className='cardLink'>READ MORE</a>
      </div>
    )
  }
}

function navBar() {

  return (
    <div>
      <header className='navbar'>
        <div className='logos'>
          <img src={require('./images/Leap.png')} alt="" />
          <img src={require('./images/Hire Me.png')} alt="" />
        </div>
        <div className='links'>
          {menuNav.map((a) => (
            <a href='#'>{a}</a>
          ))}
        </div>
      </header>
      <div className='main'>
        <div>
          <h1 style={{ color: "#D05270", fontSize: "52px", fontWeight: "700" }}>Blog Posts</h1>
          <h2 style={{ fontSize: "52px", fontWeight: "500" }}>I think so, this is it.</h2>
          <p style={{ fontSize: "18px" }}>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
          <div className='socials'>
            <p style={{ backgroundColor: '#47ACDF' }}>TWITTER</p>
            <p style={{ backgroundColor: '#1275B1' }}>LINKEDIN</p>
            <p style={{ backgroundColor: '#000000' }}>MEDIUM</p>
          </div>
        </div>
        <div className='mainRight'>
          <img src={require('./images/pink-bg.png')} alt="" />
          <img src={require('./images/emo.png')} alt="" className='svgEl' />
        </div>
      </div>
      <div className='selection'>
        {
          selectionNav.map((a) => (
            <a href='#'>{a}</a>
          ))
        }
      </div>
      <div className='news'>
        {cards.map((a) => {
          return a
        })}
      </div>
      <img src={require("./images/Derel Artwork Logo.png")} alt="" className='footerLogo' />
    </div >

  )
}
export default navBar;