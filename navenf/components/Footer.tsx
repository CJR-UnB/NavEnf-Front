export default function Footer() {
    return (
        <footer className="w-full bg-[#003366] text-white py-8 px-6 md:px-12">
            <div className="max-w-[900px] mx-auto flex flex-col gap-4 text-center">
                <p className="font-atkinson text-[13px] leading-snug text-white/90">
                    O CUIda Mielo é exclusivamente informativo, nós não coletamos, armazenamos ou tratamos dados pessoais (como nome, e-mail, telefone ou endereço). A página não possui formulários, sistemas de login ou ferramentas de interação direta. O servidor de hospedagem registra de forma automática apenas dados técnicos básicos (como seu endereço IP, tipo de navegador e horário do acesso). Essa coleta é feita de forma automatizada e temporária, servindo estritamente para garantir a estabilidade do site e a proteção contra ataques digitais.
                </p>
                <p className="font-atkinson text-[13px] text-white/70">
                    Website criado em setembro/2026.
                </p>
            </div>
        </footer>
    );
}
