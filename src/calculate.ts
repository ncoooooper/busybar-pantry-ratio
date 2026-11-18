import type {Result} from "@shared/worksheet";

export function calculate(v:number[]):Result[]{
const [flour,available,...others]=v,factor=available/flour;
 return [{name:"Recipe scale",value:+(factor*100).toFixed(1)+"%",detail:["Flour "+available+"g","Original flour "+flour+"g"],fraction:factor},
 ...others.map((grams,i)=>({name:["Water","Salt","Yeast"][i],value:+(grams*factor).toFixed(2)+"g",detail:["Original "+grams+"g","Scale "+factor.toFixed(2)+"x"]}))];
}
