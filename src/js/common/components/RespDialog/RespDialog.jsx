import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import PrivacyContent from './PrivacyContent.jsx'
import NoloQRCode from '../../../../assets/images/nolo-qr.jpg'

const isMobile = window.innerWidth < 768

const liTextCenter = { textAlign: 'center', cursor: 'pointer' }

const TermsOfServiceContent = () => (
  <div>
    <p>Updated 06/05/2019</p>
    <div>
      <h2>Acceptance of Terms</h2>
      <p>
        North Loop Technologies, Inc. (referred to as &ldquo;North Loop,&rdquo; &ldquo;us&rdquo;,
        &ldquo;our&rdquo;, or &ldquo;we&rdquo;) provide this website and any mobile applications,
        including North Loop app. Your access and use of our website and North Loop app
        (&ldquo;Site&rdquo;) is subject to these Terms of Service (&ldquo;Terms&rdquo;) and North
        Loop - Privacy Policy (&ldquo;Privacy Policy&rdquo;). By accessing and using the Site, you
        understand and agree to these Terms and Privacy Policy. We reserve the right to change these
        Terms from time to time with or without notice to you. You acknowledge and agree that it is
        your responsibility to periodically review the Terms and Privacy Policy. Your continued use
        of this Site and any offerings made available on the Site, including but not limited to
        joining product launch waitlists and use of our products, after such modifications will
        constitute acknowledgment and acceptance of the modified Terms. North Loop means North Loop
        Technologies, Inc. and its affiliates. For purposes of these Terms, &ldquo;Affiliates&rdquo;
        includes North Loop&rsquo;s owners, licensees, assigns, subsidiaries, affiliated companies,
        officers, directors, employees, sponsors, and thirdparty vendors and includes (without
        limitation) all parties involved in creating, producing, and/or delivering this Site and/or
        contents and offerings available on this Site. BY USING THIS SITE AND OFFERINGS ON THIS
        SITE, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT WISH TO BE BOUND BY THE THESE
        TERMS, DO NOT ACCESS OR USE THE SITE.
      </p>
    </div>
    <div>
      <h2>Site Uses and Conduct</h2>
      <p>
        This Site is intended for your personal, non-commercial use. Your use of the Site is subject
        to all applicable laws and regulations. You will not collect or store personal information
        or data associated with other users of the Site. You will not publish, post, upload, email
        or otherwise transmit any advertising or promotional materials, including junk or bulk email
        (&ldquo;spam&rdquo;), chain letters or any other form of unauthorized communication. You
        will use and access this Site for lawful purposes only. You will not access or use this Site
        for any purpose that is unlawful, threatening, harassing, abusive, defamatory, deceptive,
        tortious, fraudulent, invasive of another&rsquo;s privacy, hateful, obscene or abusive. If
        you submit content to the Site, you will not submit any content that is illegal, expressly
        or implicitly profane, derogatory or otherwise injurious to North Loop or its Affiliates.
        You will not use or access the Site to victimize an individual or group of individuals. You
        will not access or use the Site to infringe on any patent, trademark, trade secret,
        copyright, right of publicity, or other proprietary right of any party. You will not access
        or use this Site in a way that could damage, disrupt, or limit the functionality of this
        Site or otherwise interfere with or cause damage to North Loop or the Site, including but
        not limited to uploading computer codes, files or programs that may interfere with the Site,
        the Site&rsquo;s functionality, or any hardware, software or telecommunications equipment.
        You will not access or use the Site to attempt to or to actually obtain unauthorized access
        to the Site, computer systems and networks associated with the Site, or data or other
        information of any third party by any means. You will not access or use the Site to breach
        the security of, compromise or otherwise gain access to secured, protected or inaccessible
        areas of this Site. You will not impersonate any other person or entity, including our
        employees or representatives. You are solely responsible for your use and access to the
        Site.
      </p>
    </div>
    <div>
      <h2>Intellectual Property</h2>
      <p>
        The Site and its content are protected by any and all intellectual property and/or other
        proprietary rights available within the United States. All rights, title and interests in
        this Site and its content are the sole and exclusive property of North Loop or its
        affiliates except when stated otherwise. For purposes of these Terms, &ldquo;content&rdquo;
        means any information, communications, software, published works, photos, video, graphics,
        music, sounds, or other material that can be viewed by users on our Site and is owned by
        North Loop or its affiliates. All custom graphics, icons, logos and service names on the
        Site are registered trademarks, trademarks or service marks (collectively
        &ldquo;Marks&rdquo;) of North Loop or their respective third-party owners. Nothing in these
        Terms grants you any right to use any Mark. You are prohibited from using the Marks for any
        purpose, including using the Marks as metatags on other sites, or modifying the Marks in any
        way. You agree that if you copy, download or publish the Marks in any way for your personal,
        non-commercial use, you will not remove or obscure any notices accompanying the Marks. The
        Site is for your personal, non-commercial use only. You may not copy, display, reproduce,
        modify, republish, upload, post, transmit, transfer, license, or distribute in whole or in
        any part in any form or by any means whatsoever for public or commercial purposes the Site,
        its content, its software, or its offerings without prior written permission from us. Any
        unauthorized use of Site content violates our intellectual property interests and could
        result in criminal or civil penalties. You agree that if you copy, download or publish the
        Site or any of the Site&rsquo;s content in any way for your personal, non-commercial use,
        you will not remove or obscure any copyright or other notices that are on the Site or
        accompany such content. Neither we or our affiliates warrant or represent that your use of
        materials displayed on, or obtained through, this Site will not infringe the rights of third
        parties. All communications or material sent by you to us will be treated as
        non-confidential and non-proprietary (subject to our Privacy Policy). Please do not submit
        confidential or proprietary information to us (including patentable ideas, new content
        suggestions or business proposals) unless we have mutually agreed in writing otherwise.
        Ideas that we receive unsolicited will be treated as property owned by North Loop and will
        not be returned to you. We respect the intellectual property rights of others, and we ask
        you to do the same. In instances where we are notified of alleged infringing content through
        our designated agent (specified below), a decision may be made to remove access or disable
        access to such materials. We may also make a good faith attempt to contact the person who
        submitted the affected material so that they may make a counter-notification. We designate
        the following agent to receive notifications of claimed infringement: Tahem Verma, 855
        Brannan Street, 363, San Francisco, CA, 94103, North Loop Technologies, Inc
        (&ldquo;Designated Agent&rdquo;). If you believe that you or someone else&rsquo;s copyright
        has been infringed by content provided by anyone or any entity on this Site, you (or the
        owner or rights holder, collectively, &ldquo;Rights Holder&rdquo;) should send notification
        to our Designated Agent immediately. Prior to sending us notice, the Rights Holder may wish
        to consult a lawyer to determine their rights and legal obligations under the Digital
        Millennium Copyright Act (&ldquo;DMCA&rdquo;) and any other applicable laws. Nothing here or
        anywhere on this Site is intended as a substitute for qualified legal advice. To file a
        Notice of Infringing Material, we ask that the Rights Holder provide the following
        information: Reasonably sufficient details about the nature of the copyrighted work in
        question, or, in the case of multiple alleged infringements, a representative list of such
        works. This should include, title(s), author(s), any U.S. Copyright Registration number(s),
        URL(s) etc.; Reasonably sufficient details to enable us to identify and locate the material
        that is allegedly infringing the Rights Holders&rsquo; work(s) (for example, file name or
        URL of the page(s) that contain(s) the material); The Rights Holder&rsquo;s contact
        information so that we can contact them (including, for example, the Rights Holder&rsquo;s
        address, telephone number, and email address); and A statement that the Rights Holder has a
        good faith belief that the use of the alleged infringing material is not authorized by the
        copyright owner, its agent, or the law.
      </p>
    </div>
    <div>
      <h2>Privacy and Security</h2>
      <p>
        We may collect, use, and disclose your information according to our Privacy Policy, which is
        incorporated by reference. You may be asked to set up an account and password in order to
        access some of the offerings on the Site as they become available. As part of this process,
        certain personal information may be requested from you (&ldquo;Registration Info&rdquo;). If
        Registration Info is sought and provided, you will have the ability to maintain and
        periodically update your Registration Info as you see fit. By registering, you agree that
        all information provided by you as Registration Info is true and accurate and that you will
        maintain and update this information as required in order to keep it current, complete, and
        accurate. You hereby grant us the right to disclose to third parties certain Registration
        Info about you. If you register for an account on the Site, you agree that you are
        responsible for maintaining the security and confidentiality of your password and that you
        are fully responsible for all activities or charges that are incurred under your account.
        Therefore, you must take reasonable steps to ensure that others do not gain access to your
        password and account. Our employees will never ask you for your password.
      </p>
    </div>
    <div>
      <h2>Warranty Disclaimer and Limitation of Liability</h2>
      <p>
        YOU UNDERSTAND AND ACKNOWLEDGE THAT WE CANNOT PROMISE OR GUARANTEE SPECIFIC RESULTS FOR
        USING THE SITE OR ANY OFFERINGS AVAILABLE ON THE SITE. THE CONTENT AND OFFERINGS ON THE SITE
        ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;. NORTH LOOP DOES NOT
        WARRANT, EXPRESSLY OR IMPLIEDLY, THE SITE OR OFFERINGS MADE AVAILABLE ON THE SITE FOR ANY
        PARTICULAR PURPOSE. NORTH LOOP EXPRESSLY DISCLAIMS ANY AND ALL IMPLIED WARRANTIES, INCLUDING
        BUT NOT LIMITED TO, TITLE, NON-INFRINGEMENT, AND MERCHANTABILITY OF FITNESS FOR A PARTICULAR
        PURPOSE. WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY THAT THE SITE OR ITS CONTENT OR
        OFFERINGS WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE. NORTH
        LOOP CANNOT AND DOES NOT GUARANTEE THE VALIDITY, ACCURACY, TIMELINESS, COMPLETENESS OR
        RESULTS OF THE SITE OR ITS CONTENT OR OFFERINGS. NORTH LOOP OR ITS AFFILIATES IS NOT
        RESPONSIBLE FOR ANY DAMAGE OR LOSS THAT MAY RESULT FROM A THIRD-PARTY&rsquo;S INTERCEPTION
        OF THE CONTENT OR OFFERINGS MADE AVAILABLE TO YOU ON THE SITE. THIS SITE COULD INCLUDE
        TECHNICAL OR OTHER MISTAKES, INACCURACIES OR TYPOGRAPHICAL ERRORS. NORTH LOOP MAY MAKE
        CHANGES TO THE CONTENT AND OFFERINGS AT THIS SITE AT ANY TIME WITHOUT NOTICE. THE USE OF THE
        OFFERINGS OR THE DOWNLOADING OR OTHER ACQUISITION OF ANY SITE CONTENT IS DONE AT YOUR OWN
        DISCRETION AND RISK AND WITH YOUR AGREEMENT THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY
        DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM SUCH ACTIVITIES. North Loop
        AND ITS AFFILIATES WILL NOT HAVE ANY LIABILITY OR RESPONSIBILITY OF ANY KIND WHATSOEVER FOR
        ANY DAMAGE OR LOSS IN THE EVENT OF OR IN CONNECTION WITH ANY OF THE FOLLOWING: ANY FAILURE
        OR INTERRUPTION OF THIS SITE; ANY ERROR, ACT OR OMISSION IN THE TECHNICAL CONTENT AND
        OPERATION OF THE SITE; ANY ERROR IN THE SITE CONTENT; ANY OFFERINGS OR SERVICE MADE
        AVAILABLE IN THE SITE; ANY CONDUCT OF SITE USERS; ANY ACTION TAKEN WITH RESPECT TO RIGHTS
        HOLDERS; OR ANY OTHER CAUSE RELATED TO YOUR ACCESS OR THE INABILITY TO ACCESS THE SITE OR
        ITS CONTENT IRRESPECTIVE OF WHETHER THE CIRCUMSTANCES GIVING RISE TO ANY OF THE FOREGOING
        MAY HAVE BEEN WITHIN THE CONTROL OF NORTH LOOP OR ITS AFFILIATES THAT PROVIDE SERVICES OR
        SOFTWARE. IN NO EVENT WILL NORTH LOOP OR ITS AFFILIATES BE LIABLE TO YOU OR ANY THIRD-PARTY
        FOR ANY DIRECT, INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES OR ANY
        OTHER DAMAGES WHATSOEVER ARISING OUT OF OR IN CONNECTION WITH THE USE OF THIS SITE OR OF ANY
        WEBSITE REFERENCED OR LINKED TO FROM THIS LIMITATION OF LIABILITY INCLUDES BUT IS NOT
        LIMITED TO ANY ELECTRONIC EQUIPMENT FAILURE, ELECTRONIC VIRUS TRANSMISSION, CONNECTIVITY
        ISSUES, UNAUTHORIZED ACCESS, THEFT, OPERATOR ERRORS, OR ANY FORCE MAJEURE INCLUDING BUT NOT
        LIMITED TO: LABOR DISTURBANCE, WAR, FIRE, ACCIDENT, ADVERSE WEATHER, INABILITY TO SECURE
        TRANSPORTATION, GOVERNMENTAL ACT OR REGULATION, AND OTHER CAUSES OR EVENTS BEYOND OUR
        REASONABLE CONTROL. NORTH LOOP NEITHER ENDORSES NOR ASSUMES ANY LIABILITY FOR ANY MATERIAL
        (INCLUDING BUT NOT LIMITED TO FACTS, STATEMENTS, AND OPINIONS) UPLOADED OR SUBMITTED BY ANY
        THIRD-PARTY ON ANY PART OF THE SITE. YOU ACKNOWLEDGE AND AGREE THAT ANY RELIANCE UPON SUCH
        MATERIAL IS AT YOUR SOLE RISK. IN NO EVENT WILL North Loop OR ITS AFFILIATES BE LIABLE TO
        YOU OR ANY THIRDPARTY FOR ANY INJURY OR LOSS. We and our agents reserve the right to remove
        any and all postings that we feel do not comply with these Terms and any other rules of user
        conduct for our Site, or are otherwise harmful, objectionable, or inaccurate. We are not
        responsible for any failure or delay in removing such postings. Links. The Site may redirect
        or link to other websites on the Internet, or may otherwise include references to
        information, products or services made available by unaffiliated third parties. While we
        make every effort to work with trusted, reputable providers, from time to time such sites
        may contain information, material, or policies that some may find inappropriate or
        personally objectionable. You understand that we are not responsible for the accuracy,
        completeness, decency, or legality of content hosted by third party websites, nor are we
        responsible for errors or omissions in any references made on those websites. The inclusion
        of such a link or reference is provided merely as a convenience and does not imply
        endorsement of, or association with the Site or party by us, or any warranty of any kind,
        either express or implied. You understand that the privacy policies and terms of use for
        such other sites may differ from those that apply to this Site and your use of this Site.
        YOU AGREE TO DEFEND, INDEMNIFY, AND HOLD US AND OUR AFFILIATES HARMLESS FROM AND AGAINST ALL
        LIABILITIES, CLAIMS, AND EXPENSES, INCLUDING ATTORNEYS&rsquo; FEES, THAT MAY ARISE FROM OR
        RELATE TO ANY ALLEGED OR ACTUAL CLAIMS, DEMANDS, CAUSES OF ACTION, JUDGMENTS, DAMAGES,
        LOSSES, LIABILITIES AND ALL COSTS AND EXPENSES OF DEFENSE (INCLUDING REASONABLE
        ATTORNEYS&rsquo; FEES AND COURT COSTS) ARISING OUT OF OR RELATING TO: (A) YOUR USE OR MISUSE
        OF THIS SITE; (B) YOUR BREACH OF THIS AGREEMENT; (C) YOUR VIOLATION OF ANY LAW OR
        REGULATION; (D) A THIRD-PARTY&rsquo;S CLAIM THAT IS BASED ON YOUR USE OR MISUSE OF THE SITE;
        (E) ANY MISREPRESENTATION MADE BY YOU; (F) ANY DISPUTE BETWEEN YOU AND ANOTHER SITE USER;
        (G) THE THEFT, MISAPPROPRIATION OR DISCLOSURE OF YOUR PASSWORD; (H) YOUR AUTHORIZATION OF
        ANYONE ELSE TO USE YOUR PASSWORD. WE RESERVE THE RIGHT, AT OUR OWN EXPENSE, TO ASSUME THE
        EXCLUSIVE DEFENSE AND CONTROL OF ANY MATTER OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU, IN
        WHICH EVENT YOU WILL COOPERATE WITH US IN ASSERTING ANY AVAILABLE DEFENSES. SOME
        JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES OR DAMAGES SO
        SOME OF THE ABOVE MAY NOT APPLY TO YOU.
      </p>
    </div>
    <div>
      <h2>Termination of Use</h2>
      <p>
        You agree that we may, at our sole discretion, terminate or suspend your access to all or
        part of the Site with or without notice and for any reason, including, without limitation,
        breach of these Terms. Any suspected fraudulent, abusive or illegal activity may be grounds
        for barring your access to this Site, and reporting you to the proper authorities, if
        necessary. We shall not be liable to you or any third party for any claims for damages
        arising out of any termination or suspension or any other actions taken by us in connection
        therewith.
      </p>
    </div>
    <h2>Miscellaneous Provisions</h2>
    <p>
      International Use. Although this Site may be accessible worldwide, we make no representation
      that materials on this Site are appropriate or available for use in locations outside the
      United States. Those who choose to access this Site from other locations do so on their own
      initiative and at their own risk. If you choose to access this Site from outside the United
      States, you are responsible for compliance with local laws in your jurisdiction. Any offering
      made in connection with this Site is void where prohibited. Governing Law. This Site
      (excluding any Third Party websites) is controlled by us from our offices in San Francisco,
      California and the statutes and laws of California shall be controlling, without regard to the
      conflicts of laws principles thereof. You agree and hereby submit to the exclusive personal
      jurisdiction and venue of the Superior Court of the State of California for the City and
      County of San Francisco or the U.S. District Court for the Northern District of California
      with respect to such matters controlled by that court. Savings Clause. If any part of these
      Terms is held invalid or unenforceable, that portion shall be construed in a manner consistent
      with applicable law to reflect, as nearly as possible, the original intentions of the parties,
      and the remaining portions shall remain in full force and effect. No Waiver. Any failure by us
      to enforce or exercise any provision of these Terms or related rights shall not constitute a
      waiver of that right or provision. Entire Agreement. These terms and conditions constitute the
      entire agreement and understanding between the parties concerning the subject matter hereof
      and supersedes all prior agreements and understandings of the parties with respect thereto.
      These Terms may NOT be altered, supplemented, or amended by the use of any other document(s).
      To the extent that anything in or associated with this Site is in conflict or inconsistent
      with these Terms, these Terms shall take precedence. If you have any questions regarding these
      Terms, the Site, the Site content or offerings, please contact us at: help@nolobank.com
    </p>
  </div>
)

function ResponsiveDialog(props) {
  const {
    fullScreen, isFooterItem, title, footerLinkTitle, linkName,
  } = props
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    if (ga) {
      ga('send', 'event', 'PageView', `${linkName}PageView`, `${linkName}-Page-View-Label`, 1)
    }
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div>
      <li style={isFooterItem ? liTextCenter : {}}>
        <a onClick={handleClickOpen}>{footerLinkTitle}</a>
      </li>
      <Dialog
        fullScreen={fullScreen}
        style={{ zIndex: '2147483640' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <strong>{title}</strong>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {linkName === 'pp' && <PrivacyContent />}
            {linkName === 'tos' && <TermsOfServiceContent/>}
            {linkName === 'wechat' && !isMobile && (
              <p>Scan our code with the WeChat QR code scanner </p>
            )}
            {linkName === 'wechat' && isMobile && (
              <ul>
                <li>Take a screenshot of our code</li>
                <li>Open WeChat & go to the discover tab</li>
                <li>Upload the screenshot via album on the top right</li>
              </ul>
            )}
            {linkName === 'wechat' && <img src={NoloQRCode} alt="Logo" />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus style={{ color: '#a24a87' }}>
            <strong>Close</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
}

export default withMobileDialog()(ResponsiveDialog)
