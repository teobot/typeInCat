import plus from "../img/+.png";
import a from "../img/a.png";
import b from "../img/b.png";
import c from "../img/c.png";
import d from "../img/d.png";
import e from "../img/e.png";
import f from "../img/f.png";
import g from "../img/g.png";
import h from "../img/h.png";
import i from "../img/i.png";
import j from "../img/j.png";
import k from "../img/k.png";
import l from "../img/l.png";
import m from "../img/m.png";
import n from "../img/n.png";
import o from "../img/o.png";
import p from "../img/p.png";
import q from "../img/q.png";
import r from "../img/r.png";
import s from "../img/s.png";
import t from "../img/t.png";
import u from "../img/u.png";
import v from "../img/v.png";
import w from "../img/w.png";
import x from "../img/x.png";
import y from "../img/y.png";
import z from "../img/z.png";

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
