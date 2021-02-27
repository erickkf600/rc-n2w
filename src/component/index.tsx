import React from 'react'
import Pluralize from  '../services/pluralize'
import Currency from '../currencies'
import Numerals from '../numerals'

import { inWordProps } from './../interfaces/inWordProps'

const InWord = (props: inWordProps) => {
    const {
        value,
        lang = 'pt-br'
      } = props;

    let a, 
    v: any, 
    i, 
    config: any = value.replace('.', ',').split(",")
    
    let and = Currency.find(c => c.type === lang)?.separator

    let coin = Currency.find(c => c.type === lang)?.fraction
    let correncyType: any = Currency.find(c => c.type === lang)
    
    for (var f = config.length - 1, l, j = -1, r = [], s = [], t: any = ""; ++j <= f; s = []) {
        j && (config[j] = (Number("." + config[j]) * 1).toFixed(2).slice(2));

        if(!(a = (v = config[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for(a = -1, l = v.length; ++a < l; t = ""){
            if(!(i = Number(v[a]) * 1)) continue;

            (i % 100 < 20 && (t += Numerals[0][i % 100])) || (i % 100 + 1 && (t += Numerals[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? and + Numerals[0][i % 10] : "")));

            s.push((i < 100 ? t : !(i % 100) ? Numerals[2][i === 100 ? 0 : i / 100 >> 0] : (Numerals[2][i / 100 >> 0] + and + t)) +
            ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? Numerals[3][t].replace("?o", "?es") : Numerals[3][t]) : ""));
        }

        a = ( s.length > 1 ? (a = s.pop(), s.join(" ") + and + a) : s.join("") || ((!j && ((config[j + 1] * 1 > 0) || r.length)) ? "" : Numerals[0][0]));
        
        a && r.push(a + (value ? (" " + (v.join("") * 1 > 1 ? j ? coin + "s" : (/0{6,}$/.test(config[0]) ? "de " : "") + Pluralize(correncyType) : j ? coin : correncyType?.currency)) : ""));
    }
    return  r.join(and)
}

export default InWord
