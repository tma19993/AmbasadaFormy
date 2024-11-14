import { BrandType } from "./brand.type";

export type Email = BrandType<string,"Email">;

export function createEmailValue(emailLike: string) {
    assertEmail(emailLike);
    return emailLike;
}

function assertEmail(emailLike: string):asserts emailLike is Email{
    if(!validEmail(emailLike)){
        throw new Error(`${emailLike} is not an email address`)
    };
}


function validEmail(emailLike: string): emailLike is Email{
    return typeof emailLike === "string" && emailLike.includes("@");
}
