import { AuthenticationStrategy } from "@loopback/authentication";
import { service } from "@loopback/core";
import { Request, RedirectRoute, HttpErrors } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import parseBearerToken from "parse-bearer-token";
import { AutenticacionService } from "../services";

export class EstrategiaCliente implements AuthenticationStrategy{
    name: string = 'cliente'

    constructor(
        @service(AutenticacionService)
        public authenticationservice : AutenticacionService
    ){}

    async authenticate(request: Request): Promise<UserProfile | undefined> {
        let token = parseBearerToken(request)
        if (token) {
            let datos = this.authenticationservice.ValidarTokenJWT(token)
            if (datos) {
                let perfil: UserProfile = Object.assign({
                    usuario: datos.info.usuario
                });
                return perfil;
            } else {
                throw new HttpErrors[401]("el token incluido no es válido");
            }
        } else {
            throw new HttpErrors[401]("no se ha incluido un token en la solicitud");
        }
    }
}