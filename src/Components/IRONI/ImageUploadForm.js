import React from 'react';
import logo from "../../images/logo.png";

class ImageUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image: null };

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(e) {
        this.setState({
            image: URL.createObjectURL(e.target.files[0])
        });
    }

    render() {
        return (
            <div className="ImageUploadForm">
                <nav class='navbar navbar-expand-lg'>
                    <a class='navbar-brand d-flex justify-content-between ms-5' href='#'>
                        <img src={logo} alt='' />
                    </a>
                    <button
                        class='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span class='navbar-toggler-icon'></span>
                    </button>

                    <div class='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
                        <ul class='navbar-nav mr-auto'>
                            <li class='nav-item active'>
                                <a class='nav-link ms-5' href='#'>
                                    Home
                                </a>
                            </li>
                            <li class='nav-item active'>
                                <a class='nav-link ms-5' href='#'>
                                    Progress View
                                </a>
                            </li>
                            <li class='nav-item active'>
                                <a class='nav-link ms-5' href='#'>
                                    Progress Report
                                </a>
                            </li>
                            <li class='nav-item active'>
                                <a class='nav-link ms-5' href='#'>
                                    Contact Us
                                </a>
                            </li>
                            <li class='nav-item active'>
                                <a class='nav-link ms-5' href='#'>
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                    <form>
                        <div style={{ position: 'relative', width: '300px', height: '300px', backgroundColor: '#f8f8f8', border: '1px solid #ccc' }}>
                            
                            <input type="file" id="fileInput" onChange={this.handleImageChange} style={{ display: 'none' }} />
                            <label for="fileInput" style={{ backgroundColor: '#123456', color: 'white', padding: '10px 125px', cursor: 'pointer', margin: '-50px 0 0px 0px' }}>Select Image</label>
                            {this.state.image && <img src={this.state.image} alt="Selected" style={{ width: '100%', height: '100%' }} />}
                        </div>
                    </form>

                </div>
            </div>

        );
    }
}

export default ImageUploadForm;
