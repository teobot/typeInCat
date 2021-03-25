import plus from "../img/+.jpg";
import a from "../img/a.jpg";
import b from "../img/b.jpg";
import c from "../img/c.jpg";
import d from "../img/d.jpg";
import e from "../img/e.jpg";
import f from "../img/f.jpg";
import g from "../img/g.jpg";
import h from "../img/h.jpg";
import i from "../img/i.jpg";
import j from "../img/j.jpg";
import k from "../img/k.jpg";
import l from "../img/l.jpg";
import m from "../img/m.jpg";
import n from "../img/n.jpg";
import o from "../img/o.jpg";
import p from "../img/p.jpg";
import q from "../img/q.jpg";
import r from "../img/r.jpg";
import s from "../img/s.jpg";
import t from "../img/t.jpg";
import u from "../img/u.jpg";
import v from "../img/v.jpg";
import w from "../img/w.jpg";
import x from "../img/x.jpg";
import y from "../img/y.jpg";
import z from "../img/z.jpg";

export const returnImageFromChar = (letter) => {
  switch (letter) {
    case " ":
      return plus;
    case "a":
      return a;
    case "b":
      return b;
    case "c":
      return c;
    case "d":
      return d;
    case "e":
      return e;
    case "f":
      return f;
    case "g":
      return g;
    case "h":
      return h;
    case "i":
      return i;
    case "j":
      return j;
    case "k":
      return k;
    case "l":
      return l;
    case "m":
      return m;
    case "n":
      return n;
    case "o":
      return o;
    case "p":
      return p;
    case "q":
      return q;
    case "r":
      return r;
    case "s":
      return s;
    case "t":
      return t;
    case "u":
      return u;
    case "v":
      return v;
    case "w":
      return w;
    case "x":
      return x;
    case "y":
      return y;
    case "z":
      return z;
    default:
      return null;
  }
};
