import React from "react";
import { Container } from "./ui/container";
import { ChevronRight, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-wider text-blue-900">
              ARSHA
            </h1>
            <div className="mb-6 space-y-1 text-sm text-black text-opacity-60">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
            </div>
            <p className="text-sm text-black text-opacity-60">
              <b>Phone:</b> +1 1234556789
            </p>
            <p className="text-sm text-black text-opacity-60">
              <b>Email:</b> example@gmail.com
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-900">Useful Links</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Home
                </span>
              </li>
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  About Us
                </span>
              </li>
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Services
                </span>
              </li>
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Terms of Service
                </span>
              </li>
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-900">Our services</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Web Design
                </span>
              </li>
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Web Development
                </span>
              </li>
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Product Management
                </span>
              </li>
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Marketing
                </span>
              </li>
              <li className="flex items-center text-sm">
                <ChevronRight className="text-sky-500" size={15} />{" "}
                <span className="cursor-pointer text-black text-opacity-60 hover:text-sky-500">
                  Graphic Design{" "}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-900">
              Our Social Networks
            </h4>
            <p className="my-4 text-black text-opacity-75">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, porro.
            </p>
            <div className="flex gap-4">
              <div className="flex cursor-pointer items-center justify-center rounded-full bg-sky-500 p-3 hover:bg-sky-600">
                <Facebook color="white" size={20} />
              </div>
              <div className="flex cursor-pointer items-center justify-center rounded-full bg-sky-500 p-3 hover:bg-sky-600">
                <Instagram color="white" size={20} />
              </div>
              <div className="flex cursor-pointer items-center justify-center rounded-full bg-sky-500 p-3 hover:bg-sky-600">
                <Linkedin color="white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
