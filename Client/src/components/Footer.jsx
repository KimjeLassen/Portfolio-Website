import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './footer.css'
export default function Footer() {
    return (
        <>
    <footer class="footer">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">PLACEHOLDER.</h5>
                    <p class="small text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Bootstrapious.com</a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Contact</h5>
                    <ul class="contact-list list-unstyled">
                        <li><text class="small text">Name: Kim Jong Engsted Lassen</text></li>
                        <li><text class="small text">E-mail: <a href="mailto: kimjelassen@yahoo.com">kimjelassen@yahoo.com</a></text></li>
                        <li><text class="small text">Phone: +45 51933074</text></li>
                        <li><text class="small text">LinkedIn: <a target="_blank" href="https://www.linkedin.com">LinkedIn</a></text></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
    )
}