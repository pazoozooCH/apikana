import {CompanyInfo} from "./company";

interface Users {
    count: number
    data: User[]
}

enum Gender{
    MALE, FEMALE
}

type Int=number // @TJS-type integer
type UUID=string // @format uuid

interface User {
    /**
     * the id
     */
    id: UUID
    /**
     * the given name
     * @pattern [a-z]
     *
     */
    firstName: string
    lastName: string // the family name @pattern [A-Z]
    age?: Int
    gender: Gender
    birthday: string
    parent?: User
    company: CompanyInfo
}


