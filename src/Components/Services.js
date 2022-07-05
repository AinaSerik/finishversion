import React, {Component} from "react";
import {FcBinoculars, FcPaid, FcApprove, FcInTransit, FcLikePlaceholder } from "react-icons/fc";

class Services extends Component {
  render() {
    if (!this.props.data) return null;

    return (
        <section id="services" className="services">
          <div className="container">
          <h2>Как сделать заказ</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                <div className="icon"><FcBinoculars size ={70}/></div>
                  <h4>Выбрать товар и скинуть нам ссылку</h4>
                  <p>Вам необходимо выбрать товар с онлайн-магазина по всем вашим пожеланиям и требованиям и скинуть нам ссылку корзины на Whatspp 7701 361 7044</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon"><FcPaid size={70}/></div>
                  <h4>Сделать оплату и скинуть нам чек</h4>
                <p>После отправки ссылки товара вам необходимо произвести оплату в полном размере за товар, и плюс наши услуги 10%  на карту Кaspi Bank. #карты: 4400 4301 1803 3213, #телефон: 7701 361 7044. Оплата принимается в тенге, конвертация суммы производится по актуальному курсу на текущий день.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                <div className="icon"><FcApprove size={70}/></div>
                  <h4>Подтверждение заказа</h4>
                  <p>В течение 24 часа мы обработаем ваш заказ и сразу дадим подтверждение. 
                 </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                <div className="icon"><FcInTransit size ={70}/></div>
                  <h4>Отправка товара</h4>
                  <p>Как мы получим ваш товар мы сразу оформляем все необходимые документы и отправляем вам в вашу страну. После отправки товара вам необходимо оплатить доставку и скинуть чек об оплате за доставку. Мы работаем с надежной проверенной логистической компанией, которая работает с 1955 года, отличается быстрой доставкой и приемлемыми ценами
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                <div className="icon"><FcLikePlaceholder size={70}/></div>
                  <h4>Наслаждайтесь!</h4>
                  <p>Срок от обработки заказа до получения заказа в ваши руки занимает от 3 до 5 недель. Мы стараемся сделать весь процесс в короткие сроки, так как нацеленны на долгосрочные отношения и мы всегда рады довольным клиентам!</p>
                </div>
              </div>
              </div>
            </div>
        </section>
    );
  }
}

export default Services;
