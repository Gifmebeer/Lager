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

const Legal: React.FC = () => {
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
        TERMS & CONDITIONS
      </Text>
      {/*
    <Text
          mt="lg"
          c="black"
          ff="GT-America"
          style={{
            fontSize: isMobile ? '16px' : '16px',
          }}
          maw={isMobile ? '100%' : '500px'}
          content={items}
        /> */}

      <Text mb="lg">
        We are Volga Tanganyika SL, (“Company,” “we,” “us,” “our”). Our VAT
        number is B66312810.
      </Text>
      <Text mb="lg">
        We operate the website http://gifme.beer (the “Site”), the mobile
        application Gifme.Beer (the “App”), as well as any other related
        products and services that refer or link to these legal terms (the
        “Legal Terms”) (collectively, the “Services”).
      </Text>
      <Text mb="lg">
        Gifme.Beer is a craft beer collectibles service in NFT format. Imagine
        an online platform where beer lovers can earn non-fungible tokens (NFT).
        Each NFT corresponds to a brewer, a specific beer, a bar, a specialized
        establishment in the sector, or a craft beer festival, with detailed
        information about the entity, and in the event, it is a beer, the
        ingredients, the manufacturing process, and even history or anecdotes
        related to this beer. in particular. Collectors will have the
        opportunity to acquire the NFTs as unique and collectible digital
        property.
      </Text>
      <Text mb="lg">
        In addition, these NFTs will offer exclusive benefits, such as access to
        new beer releases, discounts at the bar or brewery that offers them, or
        even the possibility of redeeming them to obtain the physical beer they
        represent, sent to the collector’s home.
      </Text>
      <Text mb="lg">You can contact us email at hola@gifme.beer</Text>
      <Text mb="lg">
        These Legal Terms constitute a legally binding agreement made between
        you, whether personally or on behalf of an entity (“you”), and Company
        SL, concerning your access to and use of the Services. You agree that by
        accessing the Services, you have read, understood, and agreed to be
        bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE
        LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES
        AND YOU MUST DISCONTINUE USE IMMEDIATELY.
      </Text>
      <Text mb="lg">
        Supplemental terms and conditions or documents that may be posted on the
        Services from time to time are hereby expressly incorporated herein by
        reference. We reserve the right, in our sole discretion, to make changes
        or modifications to these Legal Terms from time to time. We will alert
        you about any changes by updating the “Last updated” date of these Legal
        Terms, and you waive any right to receive specific notice of each such
        change. It is your responsibility to periodically review these Legal
        Terms to stay informed of updates. You will be subject to, and will be
        deemed to have been made aware of and to have accepted, the changes in
        any revised Legal Terms by your continued use of the Services after the
        date such revised Legal Terms are posted.
      </Text>
      <Text mb="lg">
        The services are intended for users who are at least 18 years old.
        Persons under the age of 18 are not permitted to use or register for the
        Services.
      </Text>
      <Text mb="lg">
        We recommend that you print a copy of these Legal Terms for your
        records.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />
      <Text mb="lg">1. OUR SERVICES</Text>
      <Text mb="lg">
        The information provided when using the Services is not intended for
        distribution to or use by any person or entity in any jurisdiction or
        country where such distribution or use would be contrary to law or
        regulation or which would subject us to any registration requirement
        within such jurisdiction or country. Accordingly, those persons who
        choose to access the Services from other locations do so on their own
        initiative and are solely responsible for compliance with local laws, if
        and to the extent local laws are applicable.
      </Text>
      <Text mb="lg">
        The Services are not tailored to comply with industry-specific
        regulations (Health Insurance Portability and Accountability Act
        (HIPAA), Federal Information Security Management Act (FISMA), etc.), so
        if your interactions would be subjected to such laws, you may not use
        the Services. You may not use the Services in a way that would violate
        the Gramm-Leach-Bliley Act (GLBA).
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">2. INTELLECTUAL PROPERTY RIGHTS</Text>
      <Text mb="lg">Our intellectual property</Text>
      <Text mb="lg">
        We are the owner or the licensee of all intellectual property rights in
        our Services, including all source code, databases, functionality,
        software, website designs, audio, video, text, photographs, and graphics
        in the Services (collectively, the “Content”), as well as the
        trademarks, service marks, and logos contained therein (the “Marks”).
      </Text>
      <Text mb="lg">
        Our Content and Marks are protected by copyright and trademark laws (and
        various other intellectual property rights and unfair competition laws)
        and treaties in the United States and around the world.
      </Text>
      <Text mb="lg">
        The Content and Marks are provided in or through the Services “AS IS”
        for your personal, non-commercial use or internal business purpose only
      </Text>
      <Text mb="lg">Your use of our Services</Text>
      <Text mb="lg">
        Subject to your compliance with these Legal Terms, including the
        “PROHIBITED ACTIVITIES” section below, we grant you a nonexclusive,
        non-transferable, revocable license to:
      </Text>
      <List>
        <List.Item>access the Services; and</List.Item>
        <List.Item>
          download or print a copy of any portion of the Content to which you
          have properly gained access.
        </List.Item>
      </List>

      <Text mb="lg">
        solely for your personal, non-commercial use or internal business
        purpose.
      </Text>
      <Text mb="lg">
        Except as set out in this section or elsewhere in our Legal Terms, no
        part of the Services and no Content or Marks may be copied, reproduced,
        aggregated, republished, uploaded, posted, publicly displayed, encoded,
        translated, transmitted, distributed, sold, licensed, or otherwise
        exploited for any commercial purpose whatsoever, without our express
        prior written permission.
      </Text>
      <Text mb="lg">
        If you wish to make any use of the Services, Content, or Marks other
        than as set out in this section or elsewhere in our Legal Terms, please
        address your request to: administration@beetricktech.com. If we ever
        grant you the permission to post, reproduce, or publicly display any
        part of our Services or Content, you must identify us as the owners or
        licensors of the Services, Content, or Marks and ensure that any
        copyright or proprietary notice appears or is visible on posting,
        reproducing, or displaying our Content.
      </Text>
      <Text mb="lg">
        We reserve all rights not expressly granted to you in and to the
        Services, Content, and Marks.
      </Text>
      <Text mb="lg">
        Any breach of these Intellectual Property Rights will constitute a
        material breach of our Legal Terms and your right to use our Services
        will terminate immediately.
      </Text>
      <Text mb="lg">Your submissions</Text>
      <Text mb="lg">
        Please review this section and the “PROHIBITED ACTIVITIES” section
        carefully prior to using our Services to understand the (a) rights you
        give us and (b) obligations you have when you post or upload any content
        through the Services
      </Text>
      <Text mb="lg">
        Submissions: By directly sending us any question, comment, suggestion,
        idea, feedback, or other information about the Services (“Submissions”),
        you agree to assign to us all intellectual property rights in such
        Submission. You agree that we shall own this Submission and be entitled
        to its unrestricted use and dissemination for any lawful purpose,
        commercial or otherwise, without acknowledgment or compensation to you.
      </Text>
      <Text mb="lg">
        You are responsible for what you post or upload: By sending us
        Submissions through any part of the Services you:
      </Text>
      <List mb="lg">
        <List.Item>
          confirm that you have read and agree with our “PROHIBITED ACTIVITIES”
          and will not post, send, publish, upload, or transmit through the
          Services any Submission that is illegal, harassing, hateful, harmful,
          defamatory, obscene, bullying, abusive, discriminatory, threatening to
          any person or group, sexually explicit, false, inaccurate, deceitful,
          or misleading;
        </List.Item>
        <List.Item>Install dependencies with yarn</List.Item>
        <List.Item>
          to the extent permissible by applicable law, waive any and all moral
          rights to any such Submission;
        </List.Item>
        <List.Item>
          to the extent permissible by applicable law, waive any and all moral
          rights to any such Submission;
        </List.Item>
        <List.Item>
          warrant that any such Submission are original to you or that you have
          the necessary rights and licenses to submit such Submissions and that
          you have full authority to grant us the above-mentioned rights in
          relation to your Submissions; and
        </List.Item>
        <List.Item>
          {' '}
          warrant and represent that your Submissions do not constitute
          confidential information.
        </List.Item>
      </List>

      <Text mb="lg">
        You are solely responsible for your Submissions and you expressly agree
        to reimburse us for any and all losses that we may suffer because of
        your breach of (a) this section, (b) any third party’s intellectual
        property rights, or (c) applicable law.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">3. USER REPRESENTATIONS</Text>
      <Text mb="lg">
        By using the Services, you represent and warrant that: (1) all
        registration information you submit will be true, accurate, current, and
        complete; (2) you will maintain the accuracy of such information and
        promptly update such registration information as necessary; (3) you have
        the legal capacity and you agree to comply with these Legal Terms; (4)
        you are not a minor in the jurisdiction in which you reside; (5) you
        will not access the Services through automated or non-human means,
        whether through a bot, script or otherwise; (6) you will not use the
        Services for any illegal or unauthorized purpose; and (7) your use of
        the Services will not violate any applicable law or regulation.
      </Text>
      <Text mb="lg">
        If you provide any information that is untrue, inaccurate, not current,
        or incomplete, we have the right to suspend or terminate your account
        and refuse any and all current or future use of the Services (or any
        portion thereof).
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">4. USER REGISTRATION</Text>
      <Text mb="lg">
        You may be required to register to use the Services. You agree to keep
        your password confidential and will be responsible for all use of your
        account and password. We reserve the right to remove, reclaim, or change
        a username you select if we determine, in our sole discretion, that such
        username is inappropriate, obscene, or otherwise objectionable.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">5. PROHIBITED ACTIVITIES</Text>
      <Text mb="lg">
        You may not access or use the Services for any purpose other than that
        for which we make the Services available. The Services may not be used
        in connection with any commercial endeavors except those that are
        specifically endorsed or approved by us.
      </Text>
      <Text mb="lg">As a user of the Services, you agree not to:</Text>

      <List>
        <List.Item>
          Systematically retrieve data or other content from the Services to
          create or compile, directly or indirectly, a collection, compilation,
          database, or directory without written permission from us.
        </List.Item>
        <List.Item>
          Trick, defraud, or mislead us and other users, especially in any
          attempt to learn sensitive account information such as user passwords
        </List.Item>
        <List.Item>
          Circumvent, disable, or otherwise interfere with security-related
          features of the Services, including features that prevent or restrict
          the use or copying of any Content or enforce limitations on the use of
          the Services and/or the Content contained therein.
        </List.Item>
        <List.Item>
          Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
          Services.
        </List.Item>
        <List.Item>
          Use any information obtained from the Services in order to harass,
          abuse, or harm another person.
        </List.Item>
        <List.Item>
          Make improper use of our support services or submit false reports of
          abuse or misconduct.
        </List.Item>
        <List.Item>
          Use the Services in a manner inconsistent with any applicable laws or
          regulations.
        </List.Item>
        <List.Item>
          Engage in unauthorized framing of or linking to the Services.
        </List.Item>
        <List.Item>
          {' '}
          Upload or transmit (or attempt to upload or to transmit) viruses,
          Trojan horses, or other material, including excessive use of capital
          letters and spamming (continuous posting of repetitive text), that
          interferes with any party’s uninterrupted use and enjoyment of the
          Services or modifies, impairs, disrupts, alters, or interferes with
          the use, features, functions, operation, or maintenance of the
          Services.
        </List.Item>
        <List.Item>
          Engage in any automated use of the system, such as using scripts to
          send comments or messages, or using any data mining, robots, or
          similar data gathering and extraction tools.
        </List.Item>
        <List.Item>
          Delete the copyright or other proprietary rights notice from any
          Content.
        </List.Item>
        <List.Item>
          Attempt to impersonate another user or person or use the username of
          another user.
        </List.Item>
        <List.Item>
          Upload or transmit (or attempt to upload or to transmit) any material
          that acts as a passive or active information collection or
          transmission mechanism, including without limitation, clear graphics
          interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other
          similar devices (sometimes referred to as “spyware” or “passive
          collection mechanisms” or “pcms”).
        </List.Item>
        <List.Item>
          Interfere with, disrupt, or create an undue burden on the Services or
          the networks or services connected to the Services.
        </List.Item>
        <List.Item>
          Harass, annoy, intimidate, or threaten any of our employees or agents
          engaged in providing any portion of the Services to you.
        </List.Item>
        <List.Item>
          Attempt to bypass any measures of the Services designed to prevent or
          restrict access to the Services, or any portion of the Services.
        </List.Item>
        <List.Item>
          Copy or adapt the Services’ software, including but not limited to
          Flash, PHP, HTML, JavaScript, or other code
        </List.Item>
        <List.Item>
          Except as permitted by applicable law, decipher, decompile,
          disassemble, or reverse engineer any of the software comprising or in
          any way making up a part of the Services.
        </List.Item>
        <List.Item>
          Except as may be the result of standard search engine or Internet
          browser usage, use, launch, develop, or distribute any automated
          system, including without limitation, any spider, robot, cheat
          utility, scraper, or offline reader that accesses the Services, or use
          or launch any unauthorized script or other software.
        </List.Item>
        <List.Item>
          Use a buying agent or purchasing agent to make purchases on the
          Services.
        </List.Item>
        <List.Item>
          Make any unauthorized use of the Services, including collecting
          usernames and/or email addresses of users by electronic or other means
          for the purpose of sending unsolicited email, or creating user
          accounts by automated means or under false pretenses.
        </List.Item>
        <List.Item>
          Use the Services as part of any effort to compete with us or otherwise
          use the Services and/or the Content for any revenue-generating
          endeavor or commercial enterprise.
        </List.Item>
        <List.Item>
          Use the Services to advertise or offer to sell goods and services.
        </List.Item>
      </List>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">6. USER GENERATED CONTRIBUTIONS</Text>
      <Text mb="lg">
        The Services does not offer users to submit or post content. We may
        provide you with the opportunity to create, submit, post, display,
        transmit, perform, publish, distribute, or broadcast content and
        materials to us or on the Services, including but not limited to text,
        writings, video, audio, photographs, graphics, comments, suggestions, or
        personal information or other material (collectively, “Contributions”).
        Contributions may be viewable by other users of the Services and through
        third-party websites.{' '}
      </Text>
      <Text mb="lg">
        When you create or make available any Contributions, you thereby
        represent and warrant that:
      </Text>

      <List>
        <List.Item>
          The creation, distribution, transmission, public display, or
          performance, and the accessing, downloading, or copying of your
          Contributions do not and will not infringe the proprietary rights,
          including but not limited to the copyright, patent, trademark, trade
          secret, or moral rights of any third party.
        </List.Item>
        <List.Item>
          You are the creator and owner of or have the necessary licenses,
          rights, consents, releases, and permissions to use and to authorize
          us, the Services, and other users of the Services to use your
          Contributions in any manner contemplated by the Services and these
          Legal Terms.
        </List.Item>
        <List.Item>
          You have the written consent, release, and/or permission of each and
          every identifiable individual person in your Contributions to use the
          name or likeness of each and every such identifiable individual person
          to enable inclusion and use of your Contributions in any manner
          contemplated by the Services and these Legal Terms.
        </List.Item>
        <List.Item>
          Your Contributions are not false, inaccurate, or misleading.
        </List.Item>
        <List.Item>
          Your Contributions are not unsolicited or unauthorized advertising,
          promotional materials, pyramid schemes, chain letters, spam, mass
          mailings, or other forms of solicitation.
        </List.Item>
        <List.Item>
          Your Contributions are not obscene, lewd, lascivious, filthy, violent,
          harassing, libelous, slanderous, or otherwise objectionable (as
          determined by us).
        </List.Item>
        <List.Item>
          Your Contributions do not ridicule, mock, disparage, intimidate, or
          abuse anyone.
        </List.Item>
        <List.Item>
          Your Contributions are not used to harass or threaten (in the legal
          sense of those terms) any other person and to promote violence against
          a specific person or class of people.
        </List.Item>
        <List.Item>
          Your Contributions do not violate any applicable law, regulation, or
          rule.
        </List.Item>
        <List.Item>
          Your Contributions do not violate the privacy or publicity rights of
          any third party.
        </List.Item>
        <List.Item>
          Your Contributions do not violate any applicable law concerning child
          pornography, or otherwise intended to protect the health or well-being
          of minors.
        </List.Item>
        <List.Item>
          Your Contributions do not include any offensive comments that are
          connected to race, national origin, gender, sexual preference, or
          physical handicap.
        </List.Item>
        <List.Item>
          Your Contributions do not otherwise violate, or link to material that
          violates, any provision of these Legal Terms, or any applicable law or
          regulation.
        </List.Item>
      </List>
      <Text mb="lg">
        Any use of the Services in violation of the foregoing violates these
        Legal Terms and may result in, among other things, termination or
        suspension of your rights to use the Services.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">7. CONTRIBUTION LICENSE</Text>
      <Text mb="lg">
        You and Services agree that we may access, store, process, and use any
        information and personal data that you provide and your choices
        (including settings).
      </Text>
      <Text mb="lg">
        By submitting suggestions or other feedback regarding the Services, you
        agree that we can use and share such feedback for any purpose without
        compensation to you.
      </Text>
      <Text mb="lg">
        We do not assert any ownership over your Contributions. You retain full
        ownership of all of your Contributions and any intellectual property
        rights or other proprietary rights associated with your Contributions.
        We are not liable for any statements or representations in your
        Contributions provided by you in any area on the Services. You are
        solely responsible for your Contributions to the Services and you
        expressly agree to exonerate us from any and all responsibility and to
        refrain from any legal action against us regarding your Contributions.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">8. MOBILE APPLICATION LICENSE</Text>
      <Text mb="lg">Use License</Text>
      <Text mb="lg">
        If you access the Services via the App, then we grant you a revocable,
        non-exclusive, non-transferable, limited right to install and use the
        App on wireless electronic devices owned or controlled by you, and to
        access and use the App on such devices strictly in accordance with the
        terms and conditions of this mobile application license contained in
        these Legal Terms. You shall not: (1) except as permitted by applicable
        law, decompile, reverse engineer, disassemble, attempt to derive the
        source code of, or decrypt the App; (2) make any modification,
        adaptation, improvement, enhancement, translation, or derivative work
        from the App; (3) violate any applicable laws, rules, or regulations in
        connection with your access or use of the App; (4) remove, alter, or
        obscure any proprietary notice (including any notice of copyright or
        trademark) posted by us or the licensors of the App; (5) use the App for
        any revenue-generating endeavor, commercial enterprise, or other purpose
        for which it is not designed or intended; (6) make the App available
        over a network or other environment permitting access or use by multiple
        devices or users at the same time; (7) use the App for creating a
        product, service, or software that is, directly or indirectly,
        competitive with or in any way a substitute for the App; (8) use the App
        to send automated queries to any website or to send any unsolicited
        commercial email; or (9) use any proprietary information or any of our
        interfaces or our other intellectual property in the design,
        development, manufacture, licensing, or distribution of any
        applications, accessories, or devices for use with the App.
      </Text>
      <Text mb="lg">Apple and Android Devices</Text>
      <Text mb="lg">
        The following terms apply when you use the App obtained from either the
        Apple Store or Google Play (each an “App Distributor”) to access the
        Services: (1) the license granted to you for our App is limited to a
        non-transferable license to use the application on a device that
        utilizes the Apple iOS or Android operating systems, as applicable, and
        in accordance with the usage rules set forth in the applicable App
        Distributor’s terms of service; (2) we are responsible for providing any
        maintenance and support services with respect to the App as specified in
        the terms and conditions of this mobile application license contained in
        these Legal Terms or as otherwise required under applicable law, and you
        acknowledge that each App Distributor has no obligation whatsoever to
        furnish any maintenance and support services with respect to the App;
        (3) in the event of any failure of the App to conform to any applicable
        warranty, you may notify the applicable App Distributor, and the App
        Distributor, in accordance with its terms and policies, may refund the
        purchase price, if any, paid for the App, and to the maximum extent
        permitted by applicable law, the App Distributor will have no other
        warranty obligation whatsoever with respect to the App; (4) you
        represent and warrant that (i) you are not located in a country that is
        subject to a US government embargo, or that has been designated by the
        US government as a “terrorist supporting” country and (ii) you are not
        listed on any US government list of prohibited or restricted parties;
        (5) you must comply with applicable third-party terms of agreement when
        using the App, e.g., if you have a VoIP application, then you must not
        be in violation of their wireless data service agreement when using the
        App; and (6) you acknowledge and agree that the App Distributors are
        third-party beneficiaries of the terms and conditions in this mobile
        application license contained in these Legal Terms, and that each App
        Distributor will have the right (and will be deemed to have accepted the
        right) to enforce the terms and conditions in this mobile application
        license contained in these Legal Terms against you as a third-party
        beneficiary thereof.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">9. SOCIAL MEDIA</Text>
      <Text mb="lg">
        As part of the functionality of the Services, you may link your account
        with online accounts you have with third-party service providers (each
        such account, a “Third-Party Account”) by either: (1) providing your
        Third-Party Account login information through the Services; or (2)
        allowing us to access your Third-Party Account, as is permitted under
        the applicable terms and conditions that govern your use of each
        Third-Party Account. You represent and warrant that you are entitled to
        disclose your Third-Party Account login information to us and/or grant
        us access to your Third-Party Account, without breach by you of any of
        the terms and conditions that govern your use of the applicable
        Third-Party Account, and without obligating us to pay any fees or making
        us subject to any usage limitations imposed by the third-party service
        provider of the Third-Party Account. By granting us access to any
        Third-Party Accounts, you understand that (1) we may access, make
        available, and store (if applicable) any content that you have provided
        to and stored in your Third-Party Account (the “Social Network Content”)
        so that it is available on and through the Services via your account,
        including without limitation any friend lists and (2) we may submit to
        and receive from your Third-Party Account additional information to the
        extent you are notified when you link your account with the Third-Party
        Account. Depending on the Third-Party Accounts you choose and subject to
        the privacy settings that you have set in such ThirdParty Accounts,
        personally identifiable information that you post to your Third-Party
        Accounts may be available on and through your account on the Services.
        Please note that if a Third-Party Account or associated service becomes
        unavailable or our access to such Third-Party Account is terminated by
        the third-party service provider, then Social Network Content may no
        longer be available on and through the Services. You will have the
        ability to disable the connection between your account on the Services
        and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR
        RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR
        THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH
        THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social
        Network Content for any purpose, including but not limited to, for
        accuracy, legality, or non-infringement, and we are not responsible for
        any Social Network Content. You acknowledge and agree that we may access
        your email address book associated with a Third-Party Account and your
        contacts list stored on your mobile device or tablet computer solely for
        purposes of identifying and informing you of those contacts who have
        also registered to use the Services. You can deactivate the connection
        between the Services and your Third-Party Account by contacting us using
        the contact information below or through your account settings (if
        applicable). We will attempt to delete any information stored on our
        servers that was obtained through such Third-Party Account, except the
        username and profile picture that become associated with your account.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">10. THIRD-PARTY WEBSITES AND CONTENT</Text>
      <Text mb="lg">
        The Services may contain (or you may be sent via the Site or App) links
        to other websites (“Third-Party Websites”) as well as articles,
        photographs, text, graphics, pictures, designs, music, sound, video,
        information, applications, software, and other content or items
        belonging to or originating from third parties (“Third-Party Content”).
        Such Third-Party Websites and ThirdParty Content are not investigated,
        monitored, or checked for accuracy, appropriateness, or completeness by
        us, and we are not responsible for any Third-Party Websites accessed
        through the Services or any Third-Party Content posted on, available
        through, or installed from the Services, including the content,
        accuracy, offensiveness, opinions, reliability, privacy practices, or
        other policies of or contained in the Third-Party Websites or the
        Third-Party Content. Inclusion of, linking to, or permitting the use or
        installation of any Third-Party Websites or any Third-Party Content does
        not imply approval or endorsement thereof by us. If you decide to leave
        the Services and access the Third-Party Websites or to use or install
        any Third-Party Content, you do so at your own risk, and you should be
        aware these Legal Terms no longer govern. You should review the
        applicable terms and policies, including privacy and data gathering
        practices, of any website to which you navigate from the Services or
        relating to any applications you use or install from the Services. Any
        purchases you make through Third-Party Websites will be through other
        websites and from other companies, and we take no responsibility
        whatsoever in relation to such purchases which are exclusively between
        you and the applicable third party. You agree and acknowledge that we do
        not endorse the products or services offered on Third-Party Websites and
        you shall hold us blameless from any harm caused by your purchase of
        such products or services. Additionally, you shall hold us blameless
        from any losses sustained by you or harm caused to you relating to or
        resulting in any way from any Third-Party Content or any contact with
        Third-Party Websites.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">11. ADVERTISERS</Text>
      <Text mb="lg">
        We allow advertisers to display their advertisements and other
        information in certain areas of the Services, such as sidebar
        advertisements or banner advertisements. We simply provide the space to
        place such advertisements, and we have no other relationship with
        advertisers.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">12. SERVICES MANAGEMENT</Text>
      <Text mb="lg">
        We reserve the right, but not the obligation, to: (1) monitor the
        Services for violations of these Legal Terms; (2) take appropriate legal
        action against anyone who, in our sole discretion, violates the law or
        these Legal Terms, including without limitation, reporting such user to
        law enforcement authorities; (3) in our sole discretion and without
        limitation, refuse, restrict access to, limit the availability of, or
        disable (to the extent technologically feasible) any of your
        Contributions or any portion thereof; (4) in our sole discretion and
        without limitation, notice, or liability, to remove from the Services or
        otherwise disable all files and content that are excessive in size or
        are in any way burdensome to our systems; and (5) otherwise manage the
        Services in a manner designed to protect our rights and property and to
        facilitate the proper functioning of the Services.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">13. PRIVACY POLICY</Text>
      <Text mb="lg">
        We care about data privacy and security. By using the Services, you
        agree to be bound by our Privacy Policy posted on the Services, which is
        incorporated into these Legal Terms. Please be advised the Services are
        hosted in Spain. If you access the Services from any other region of the
        world with laws or other requirements governing personal data
        collection, use, or disclosure that differ from applicable laws in
        Spain, then through your continued use of the Services, you are
        transferring your data to Spain, and you expressly consent to have your
        data transferred to and processed in Spain.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">4. TERM AND TERMINATION</Text>
      <Text mb="lg">
        These Legal Terms shall remain in full force and effect while you use
        the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS,
        WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
        LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING
        CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON,
        INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY,
        OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR
        REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES
        OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT
        ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION
      </Text>
      <Text mb="lg">
        If we terminate or suspend your account for any reason, you are
        prohibited from registering and creating a new account under your name,
        a fake or borrowed name, or the name of any third party, even if you may
        be acting on behalf of the third party. In addition to terminating or
        suspending your account, we reserve the right to take appropriate legal
        action, including without limitation pursuing civil, criminal, and
        injunctive redress.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">15. MODIFICATIONS AND INTERRUPTIONS</Text>
      <Text mb="lg">
        We reserve the right to change, modify, or remove the contents of the
        Services at any time or for any reason at our sole discretion without
        notice. However, we have no obligation to update any information on our
        Services. We will not be liable to you or any third party for any
        modification, price change, suspension, or discontinuance of the
        Services.
      </Text>
      <Text mb="lg">
        We cannot guarantee the Services will be available at all times. We may
        experience hardware, software, or other problems or need to perform
        maintenance related to the Services, resulting in interruptions, delays,
        or errors. We reserve the right to change, revise, update, suspend,
        discontinue, or otherwise modify the Services at any time or for any
        reason without notice to you. You agree that we have no liability
        whatsoever for any loss, damage, or inconvenience caused by your
        inability to access or use the Services during any downtime or
        discontinuance of the Services. Nothing in these Legal Terms will be
        construed to obligate us to maintain and support the Services or to
        supply any corrections, updates, or releases in connection therewith.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">16. GOVERNING LAW</Text>
      <Text mb="lg">
        These Legal Terms are governed by and interpreted following the laws of
        Spain, and the use of the United Nations Convention of Contracts for the
        International Sales of Goods is expressly excluded. If your habitual
        residence is in the EU, and you are a consumer, you additionally possess
        the protection provided to you by obligatory provisions of the law in
        your country to residence. Beetrick Technologies SL and yourself both
        agree to submit to the non-exclusive jurisdiction of the courts of
        Barcelona, which means that you may make a claim to defend your consumer
        protection rights in regards to these Legal Terms in Spain, or in the EU
        country in which you reside.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">17. DISPUTE RESOLUTION</Text>
      <Text mb="lg">Informal Negotiations</Text>
      <Text mb="lg">
        To expedite resolution and control the cost of any dispute, controversy,
        or claim related to these Legal Terms (each a “Dispute” and
        collectively, the “Disputes”) brought by either you or us (individually,
        a “Party” and collectively, the “Parties”), the Parties agree to first
        attempt to negotiate any Dispute (except those Disputes expressly
        provided below) informally for at least sixty (60) days before
        initiating arbitration. Such informal negotiations commence upon written
        notice from one Party to the other Party.
      </Text>
      <Text mb="lg">Binding Arbitration</Text>
      <Text mb="lg">
        Any dispute arising from the relationships between the Parties to these
        Legal Terms shall be determined by one arbitrator who will be chosen in
        accordance with the Arbitration and Internal Rules of the European Court
        of Arbitration being part of the European Centre of Arbitration having
        its seat in Strasbourg, and which are in force at the time the
        application for arbitration is filed, and of which adoption of this
        clause constitutes acceptance. The seat of arbitration shall be
        Barcelona, Spain. The language of the proceedings shall be Català or
        Spanish. Applicable rules of substantive law shall be the law of Spain.
      </Text>
      <Text mb="lg">Restrictions</Text>
      <Text mb="lg">
        The Parties agree that any arbitration shall be limited to the Dispute
        between the Parties individually. To the full extent permitted by law,
        (a) no arbitration shall be joined with any other proceeding; (b) there
        is no right or authority for any Dispute to be arbitrated on a
        class-action basis or to utilize class action procedures; and (c) there
        is no right or authority for any Dispute to be brought in a purported
        representative capacity on behalf of the general public or any other
        persons.
      </Text>
      <Text mb="lg">Exceptions to Informal Negotiations and Arbitration</Text>
      <Text mb="lg">
        The Parties agree that the following Disputes are not subject to the
        above provisions concerning informal negotiations binding arbitration:
        (a) any Disputes seeking to enforce or protect, or concerning the
        validity of, any of the intellectual property rights of a Party; (b) any
        Dispute related to, or arising from, allegations of theft, piracy,
        invasion of privacy, or unauthorized use; and (c) any claim for
        injunctive relief. If this provision is found to be illegal or
        unenforceable, then neither Party will elect to arbitrate any Dispute
        falling within that portion of this provision found to be illegal or
        unenforceable and such Dispute shall be decided by a court of competent
        jurisdiction within the courts listed for jurisdiction above, and the
        Parties agree to submit to the personal jurisdiction of that court.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">18. CORRECTIONS</Text>
      <Text mb="lg">
        There may be information on the Services that contains typographical
        errors, inaccuracies, or omissions, including descriptions, pricing,
        availability, and various other information. We reserve the right to
        correct any errors, inaccuracies, or omissions and to change or update
        the information on the Services at any time, without prior notice.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">19. DISCLAIMER</Text>
      <Text mb="lg">
        THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
        THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST
        EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
        IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT
        LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
        REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES’
        CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO
        THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
        (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2)
        PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING
        FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS
        TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
        AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
        CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
        VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
        THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
        OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY
        KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED,
        OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT,
        ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
        ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
        HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN
        ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY
        WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
        THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A
        PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD
        USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
      </Text>

      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">20. LIMITATIONS OF LIABILITY</Text>
      <Text mb="lg">
        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO
        YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
        EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
        PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
        USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN,
        OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM
        OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY,
        BY YOU TO US. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
        LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF
        CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
        DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
        ADDITIONAL RIGHTS.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">21. INDEMNIFICATION</Text>
      <Text mb="lg">
        You agree to defend, indemnify, and hold us harmless, including our
        subsidiaries, affiliates, and all of our respective officers, agents,
        partners, and employees, from and against any loss, damage, liability,
        claim, or demand, including reasonable attorneys’ fees and expenses,
        made by any third party due to orarising out of: (1) use of the
        Services; (2) breach of these Legal Terms; (3) any breach of your
        representations and warranties set forth in these Legal Terms; (4) your
        violation of the rights of a third party, including but not limited to
        intellectual property rights; or (5) any overt harmful act toward any
        other user of the Services with whom you connected via the Services.
        Notwithstanding the foregoing, we reserve the right, at your expense, to
        assume the exclusive defense and control of any matter for which you are
        required to indemnify us, and you agree to cooperate, at your expense,
        with our defense of such claims. We will use reasonable efforts to
        notify you of any such claim, action, or proceeding which is subject to
        this indemnification upon becoming aware of it.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">22. USER DATA</Text>
      <Text mb="lg">
        We will maintain certain data that you transmit to the Services for the
        purpose of managing the performance of the Services, as well as data
        relating to your use of the Services. Although we perform regular
        routine backups of data, you are solely responsible for all data that
        you transmit or that relates to any activity you have undertaken using
        the Services. You agree that we shall have no liability to you for any
        loss or corruption of any such data, and you hereby waive any right of
        action against us arising from any such loss or corruption of such data.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">
        23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
      </Text>
      <Text mb="lg">
        Visiting the Services, sending us emails, and completing online forms
        constitute electronic communications. You consent to receive electronic
        communications, and you agree that all agreements, notices, disclosures,
        and other communications we provide to you electronically, via email and
        on the Services, satisfy any legal requirement that such communication
        be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
        CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
        NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY
        US OR VIA THE SERVICES. You hereby waive any rights or requirements
        under any statutes, regulations, rules, ordinances, or other laws in any
        jurisdiction which require an original signature or delivery or
        retention of non-electronic records, or to payments or the granting of
        credits by any means other than electronic means.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">24. CALIFORNIA USERS AND RESIDENTS</Text>
      <Text mb="lg">
        If any complaint with us is not satisfactorily resolved, you can contact
        the Complaint Assistance Unit of the Division of Consumer Services of
        the California Department of Consumer Affairs in writing at 1625 North
        Market Blvd., Suite N112, Sacramento, California 95834 or by telephone
        at (800) 952-5210 or (916)445-1254.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">25. MISCELLANEOUS</Text>
      <Text mb="lg">
        These Legal Terms and any policies or operating rules posted by us on
        the Services or in respect to the Services constitute the entire
        agreement and understanding between you and us. Our failure to exercise
        or enforce any right or provision of these Legal Terms shall not operate
        as a waiver of such right or provision. These Legal Terms operate to the
        fullest extent permissible by law. We may assign any or all of our
        rights and obligations to others at any time. We shall not be
        responsible or liable for any loss, damage, delay, or failure to act
        caused by any cause beyond our reasonable control. If any provision or
        part of a provision of these Legal Terms is determined to be unlawful,
        void, or unenforceable, that provision or part of the provision is
        deemed severable from these Legal Terms and does not affect the validity
        and enforceability of any remaining provisions. There is no joint
        venture, partnership, employment or agency relationship created between
        you and us as a result of these Legal Terms or use of the Services. You
        agree that these Legal Terms will not be construed against us by virtue
        of having drafted them. You hereby waive any and all defenses you may
        have based on the electronic form of these Legal Terms and the lack of
        signing by the parties hereto to execute these Legal Terms.
      </Text>
      <Divider
        my="md"
        color="black"
        variant="dotted"
        style={{
          root: {
            color: 'black',
          },
        }}
      />

      <Text mb="lg">26. CONTACT US</Text>
      <Text mb="lg">
        In order to resolve a complaint regarding the Services or to receive
        further information regarding use of the Services, please contact us at:
      </Text>
      <Text>Volga Tanganyika, SL </Text>
      <Text>B66312810</Text>
      <Text>c/ Carmancel, 7</Text>
      <Text>Agullana 17707 Girona</Text>
      <Text mb="lg" variant="link" component="a" href="mailto:hola@gifme.beer">
        hola@gifme.beer
      </Text>
    </Container>
  );
};

export default Legal;
