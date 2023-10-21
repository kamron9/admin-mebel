import Employees from "../../sub-components/statistic/employees";

export const TabItems = [
    {
        key:'1',
        label:'employees',
        children:<Employees/>
    },
    {
        key:'2',
        label:'graph',
        children:<h1>graph</h1>
    },
    {
        key:'3',
        label:'carousel',
        children:<h1>carousel</h1>
    },
]