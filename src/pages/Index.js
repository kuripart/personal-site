import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import Main from '../layouts/Main';


const messages = [
  "Hello World!",
  "Hello Wêreld!",
  "Përshendetje Botë!",
  "ሰላም ልዑል!",
  "رحبا بالعالم!",
  "Բարեւ աշխարհ!",
  "Kaixo Mundua!",
  "Прывітанне Сусвет!",
  "ওহে বিশ্ব!",
  "Здравей свят!",
  "Hola món!",
  "Moni Dziko Lapansi!",
  "你好世界！",
  "Pozdrav svijete!",
  "Ahoj světe!",
  "Hej Verden!",
  "Hallo Wereld!",
  "Hello World!",
  "Tere maailm!",
  "Hei maailma!",
  "Bonjour monde!",
  "Hallo wrâld!",
  "გამარჯობა მსოფლიო!",
  "Hallo Welt!",
  "Γειά σου Κόσμε!",
  "Sannu Duniya!",
  "לום עולם!",
  "नमस्ते दुनिया!",
  "Helló Világ!",
  "Halló heimur!",
  "Ndewo Ụwa!",
  "Halo Dunia!",
  "Ciao mondo!",
  "こんにちは世界！",
  "Сәлем Әлем!",
  "សួស្តី​ពិភពលោក!",
  "Салам дүйнө!",
  "ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ!",
  "Sveika pasaule!",
  "Labas pasauli!",
  "Moien Welt!",
  "Здраво свету!",
  "Hai dunia!",
  "ഹലോ വേൾഡ്!",
  "Сайн уу дэлхий!",,
  "မင်္ဂလာပါကမ္ဘာလောက!",,
  "नमस्कार संसार!",
  "Hei Verden!",
  "لام نړی!",
  "لام دنیا!",
  "Witaj świecie!",
  "Olá Mundo!",
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ!",
  "Salut Lume!",
  "Привет мир!",
  "Hàlo a Shaoghail!",
  "Здраво Свете!",
  "Lefatše Lumela!",
  "හෙලෝ වර්ල්ඩ්!",
  "Pozdravljen svet!",
  "¡Hola Mundo!",
  "Halo Dunya!",
  "Salamu Dunia!",
  "Hej världen!",
  "Салом Ҷаҳон!",
  "สวัสดีชาวโลก!",
  "Selam Dünya!",
  "Привіт Світ!",
  "Salom Dunyo!",
  "Chào thế giới!",
  "Helo Byd!",
  "Molo Lizwe!",
  "העלא וועלט!",
  "Mo ki O Ile Aiye!",
  "Sawubona Mhlaba!",
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};


const Index = () => {

    const hold = 50; // ticks to wait after message is complete before rendering next message
    const delay = 50; // tick length in mS

    const [idx, updateIter] = useState(0); // points to current message
    const [message, updateMessage] = useState(messages[idx]);
    const [char, updateChar] = useState(messages[idx].length); // points to current char
    const [isActive, setIsActive] = useState(true); // disable when all messages are printed

    useInterval(() => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    }, isActive ? delay : null);

    return (
      <Main
        description={"Partha's personal website."}
      >
        <article className="post" id="index">
          <header>
            <div className="title">
              <h2 data-testid="heading">{message}</h2>
            </div>
          </header>
          <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            view <Link to="/stats">some stats</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
          </p>
        </article>
      </Main>
    );
  };

export default Index;
