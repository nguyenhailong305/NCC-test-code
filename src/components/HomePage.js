import React from 'react'
import './homepage.css'

const HomePage = () => {
  return (
    <div>
        <div className="sidebar">
          <ul className="menu">
            <li ><a href="#">Home</a></li>
            <li ><a href="#">Service</a></li>
            <li ><a href="#">New</a></li>
            <li ><a href="#">Blog</a></li>
            <li ><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="content">
          <div className="header">
            <img src="https://i.postimg.cc/MZ7SX6tH/logo-NCC-1.png" alt="Logo" />
          </div>
          <div className="box">
            <h1>Lorem ipsum dolor sit asmet?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
          </div>
          
          <div className="content-text">
                <div className="box-content">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <img src="https://i.postimg.cc/MZ7SX6tH/logo-NCC-1.png" alt="Logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
                <div className="box-content">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <img src="https://i.postimg.cc/MZ7SX6tH/logo-NCC-1.png" alt="Logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
                <div className="box-content">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <img src="https://i.postimg.cc/MZ7SX6tH/logo-NCC-1.png" alt="Logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage