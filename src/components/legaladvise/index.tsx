import React from 'react';

import {
  Accordion,
  Container,
  em,
  Image,
  Center,
  Text,
  Divider,
  List,
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

/* import Text from '../Text'; */

const Legaladvise: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(850)})`);
 
  return (
    <Container
      bg="#EAEAEA"
      mih="30vh"
      pt="lg"
      pb="lg"
      mt={{ base: 'lg', md: 'lg' }}
      pr="lg"
      pl="lg"
    >
      <Text
        mb="lg"
        ff="MetamorBit-Latin"
        style={{
          fontSize: isMobile ? '28px' : '35px',
        }}
        c="black"
        maw={isMobile ? '100%' : '500px'}
        content="TERMS & CONDITIONS"
      >
       LEGAL ADVISE / PRIVACY POLICY
      </Text>
  

      <Text mb="lg">
      La página Web “gifme.beer” es titularidad de Volga Tanganyika, SL y cumple con los requisitos derivados de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, del Real Decreto Ley 13 /2012, de 30 de marzo, así como de las obligaciones de información al usuario contemplada en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal.
      </Text>
      <Text >Razón Social: Volga Tanganyika, SL</Text>
      <Text >Domicilio social: C/ Carmancel, 7</Text>
      <Text >N.I.F.: B66312810</Text>
      <Text mb="lg">Correo electrónico: hola@gifme.beer</Text>
      
      <Text  fw="bold">POLÍTICA DE PRIVACIDAD</Text>
      <Text mb="lg">De acuerdo con la normativa vigente en materia de protección de datos así como en materia de servicios de la sociedad de la información y de comercio electrónico, el usuario acepta que los datos personales aportados en la Web, o cualquier otra facilitada a Volga Tanganyika, SL por su acceso a algunos de los servicios, sean incorporados a ficheros titularidad de Volga Tanganyika, SL con el fin de facilitar la prestación de los servicios solicitados, por la correcta identificación de los usuarios que soliciten servicios personalizados en la Web, por la gestión de tareas básicas de administración, así como para mantenerle informado, ya sea por correo electrónico o por cualquier otro medio, de novedades, productos y servicios relacionados con Volga Tanganyika, SL Si son comunicaciones comerciales a través de correo electrónico o medio equivalente, el usuario presta su consentimiento expreso por el envío de publicidad a través de este medio.</Text>
      <Text mb="lg">Volga Tanganyika, SL se compromete al cumplimiento de su obligación de secreto de los datos de carácter personal y de su deber de tratarlos con confidencialidad, asumiendo, a estos efectos, las medidas de índole técnica, organizativa y de seguridad necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado, de acuerdo con lo establecido en la Ley Orgánica 15/1999 de 13 de diciembre, de Protección de Datos de Carácter Personal, y demás legislación aplicable. El usuario responderá, en cualquier caso, de la veracidad de los datos facilitados, reservándose Volga Tanganyika, SL el derecho a excluir de los servicios registrados a los usuarios que hayan facilitado datos falsos, sin perjuicio de las demás acciones que proceden en Derecho.</Text>
      <Text mb="lg">Cualquier usuario puede en cualquier momento ejercitar sus derechos de acceso, rectificación, cancelación y oposición, mediante escrito, acreditando su identidad, mediante fotocopia del DNI, y especificando el derecho a ejercitar, en: Volga Tanganyika, SL – C/ Carmancel, 7 o hola@gifme.beer</Text>
      <Text mb="lg">Los usuarios aceptan expresamente y de forma libre e inequívoca que sus datos personales sean tratados por parte de Volga Tanganyika, SL para realizar las siguientes finalidades:</Text>
      <Text mb="lg">Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, comunidades sociales o cualquier medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones comerciales estarán relacionadas sobre productos o servicios ofrecidos por Volga Tanganyika, SL así como por parte de los colaboradores con los que éste hubiera llegado a algún acuerdo de promoción comercial entre sus clientes. En ese caso, los terceros nunca tendrán acceso a los datos personales. En todo caso las comunicaciones comerciales estarán realizadas por parte del prestamista y serán de productos y servicios relacionados con el sector del prestamista.</Text>
      <Text fw="bold">Realizar estudios estadísticos</Text>
      <Text mb="lg">Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a disposición del usuario en este sitio web.</Text>
      <Text fw="bold">Recibir el boletín de la página web</Text>
      <Text mb="lg">Volga Tanganyika, SL informa y garantiza expresamente a los usuarios que nunca venderá, arrendará, compartirá o de algún otro modo distribuirá o pondrá sus datos a disposición de terceras personas y que siempre que se quiera realizar algún tipo de cesión de datos personales, de forma previa, se solicitaría el consentimiento expreso, informado, e inequívoco por parte de los titulares.</Text>
      <Text fw="bold">Propiedad intelectual e industrial sobre los contenidos de la página</Text>
      <Text mb="lg">Todos los elementos que componen este sitio web, tales como la estructura, diseño y código fuente, son titularidad del citado autor y están protegidos por la normativa de propiedad intelectual e industrial. Las fotografías alojadas en esta web corresponden en su totalidad propiedad a los autores citados junto a las mismas; si en la fotografía no se le llama ningún autor, igualmente tienen propiedad intelectual.</Text>
      <Text mb="lg">No se podrán realizar actas de reproducción, modificación, distribución o comunicación pública del sitio web o algunos de sus elementos sin el previo consentimiento del propietario de esta web.</Text>
      <Text mb="lg">Los usuarios del sitio web únicamente podrán realizar un uso privado y personal de los contenidos de la web.</Text>
      <Text mb="lg">Está absolutamente prohibido, el uso del sitio web o de algunos de sus elementos con fines comerciales o ilícitos.</Text>
      <Text mb="lg">Esta web no asumirá ninguna responsabilidad derivada del uso por terceros del contenido del sitio web y podrá ejercitar todas las acciones civiles o penales que correspondan en caso de infracción de estos derechos por parte del usuario.</Text>
      <Text fw="bold">Modificaciones</Text>
      <Text mb="lg">Con el fin de mejorar las prestaciones del sitio web, se reserva el derecho, en cualquier momento y sin previa notificación al usuario, a modificar ampliar o suspender temporalmente la presentación, configuración, especificaciones técnicas y servicios del sitio web, de forma unilateral.</Text>
      <Text mb="lg">Por otra parte, se reserva el derecho a modificar en cualquier momento las presentes condiciones de uso así como cualquiera de otras condiciones particulares.</Text>
      <Text fw="bold">Exclusión de responsabilidad</Text>
      <Text mb="lg">Esta web no se responsabiliza de los eventuales errores tipográficos, formales o numéricos que pueden contener el sitio web, ni de la exactitud de la información contenida, así como tampoco lo hace de opiniones identificadas o anónimas lanzadas por personas y/o entidades en este website . En caso de alquiler, arrendamiento parcial y/o total y venta de esta web excluíamos todo tipo de responsabilidad del contenido y veracidad en esta insertada, siendo la responsabilidad total y absoluta por parte del comprador/arrendatario.</Text>
      <Text fw="bold">Hiperenlaces</Text>
      <Text mb="lg">Los hiperenlaces contenidos en el sitio web que pueden dirigir a páginas web de terceros, no se asume ninguna responsabilidad por el contenido, informaciones o servicios que puedan aparecer en estos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre ésta web ya las personas o entidades titulares de estos contenidos o titulares de los sitios donde se encuentren</Text>
    </Container>
  );
};

export default Legaladvise;
