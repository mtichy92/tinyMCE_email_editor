export default `Delivered-To: bender@false.cz
Received: by 2002:a05:6a10:e403:0:0:0:0 with SMTP id cl3csp3838240pxb;
        Tue, 18 Jan 2022 13:08:15 -0800 (PST)
X-Google-Smtp-Source: ABdhPJyvx9/y8GGasOsAN+QhHqRpZ4PjRSf5LGklgdTyhZSwJeoby/wUhzNR8mGGMf1y0p4G3v/s
X-Received: by 2002:ac8:5d93:: with SMTP id d19mr22404625qtx.191.1642540094863;
        Tue, 18 Jan 2022 13:08:14 -0800 (PST)
ARC-Seal: i=1; a=rsa-sha256; t=1642540094; cv=none;
        d=google.com; s=arc-20160816;
        b=fL7qfiU32ynkVftodr2fkk8IRwTKCjGJiM/iNhOBqH/jUdi9Unzn7YJ2mytPtBRJWJ
         e8Cag5fja/vA8/Z2BwPaYE+6cev/T2D+lOJmxHq1FZAwkyrxu3qkLkRDsAFxuU/p70oF
         +pB92pSDCkhEedSMTMiKs/woXgB150lR2gRZx7sHqC+cANhaR65X30/aOeQ1bWiQFMRz
         KgiHBknpoC+720+rK1B7XOTiidYJq+jZKTjuI+w55I7c+z2wHL+oT59wCqPjrnVe5v5x
         Y+aET5pnGDk0oMb0PQacuPRRQnXIr3DzcfdPi0yfzcl0QBQjiLs97MZTrooMzMt+TXGe
         PnDg==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
        h=feedback-id:date:message-id:mime-version:subject:to:from
         :dkim-signature:dkim-signature;
        bh=QyzhiV6OnhnyLpdmNs+dIp/LuftQwUZL6Nyed5Ot8Js=;
        b=w4Mm1l3+GyPDcTnYAB/sEi9lgQgJxPUzfYXaHpwGip4dX6vWD8b8Y/ZcWGgfgWs/F3
         ZEdipCnVudsUCLqgGsM7rR2keTB8z7jdb/78VPY7k8IAAgk8oMlvWoiB8Z+mblj1tiGd
         ntyoM/iC18oyvMRh/gQR7kHHVUodLBC1eiQk213QeGZu0a8sTNP87Ye0/l3lwpA0Pijg
         NlCJmF/sf9sg5CdYkpiWI9FsMaRejHG8sdVw018cy8iXAfH5uxkffJ0kwS1j6pjPz7cs
         LuCiMAkSkXznXUL7tKSdt9LDND8kjcr7JYCTGH0G50/zAL8BNJLvR3t/3U3gUw8cZiPr
         HIrA==
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@redoc.ly header.s=xx2zpvnzckzho3httttgbzavh2uzeglk header.b=RH45mZ86;
       dkim=pass header.i=@amazonses.com header.s=ug7nbtf4gccmlpwj322ax3p6ow6yfsug header.b=DEw0q7VW;
       spf=pass (google.com: domain of 0100017e6f04d047-12c7431b-a861-46f9-996b-8333fb89cb6f-000000@amazonses.com designates 54.240.8.51 as permitted sender) smtp.mailfrom=0100017e6f04d047-12c7431b-a861-46f9-996b-8333fb89cb6f-000000@amazonses.com;
       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=redoc.ly
Return-Path: <0100017e6f04d047-12c7431b-a861-46f9-996b-8333fb89cb6f-000000@amazonses.com>
Received: from a8-51.smtp-out.amazonses.com (a8-51.smtp-out.amazonses.com. [54.240.8.51])
        by mx.google.com with ESMTPS id c9si4104579qtc.476.2022.01.18.13.08.14
        for <bender@false.cz>
        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);
        Tue, 18 Jan 2022 13:08:14 -0800 (PST)
Received-SPF: pass (google.com: domain of 0100017e6f04d047-12c7431b-a861-46f9-996b-8333fb89cb6f-000000@amazonses.com designates 54.240.8.51 as permitted sender) client-ip=54.240.8.51;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@redoc.ly header.s=xx2zpvnzckzho3httttgbzavh2uzeglk header.b=RH45mZ86;
       dkim=pass header.i=@amazonses.com header.s=ug7nbtf4gccmlpwj322ax3p6ow6yfsug header.b=DEw0q7VW;
       spf=pass (google.com: domain of 0100017e6f04d047-12c7431b-a861-46f9-996b-8333fb89cb6f-000000@amazonses.com designates 54.240.8.51 as permitted sender) smtp.mailfrom=0100017e6f04d047-12c7431b-a861-46f9-996b-8333fb89cb6f-000000@amazonses.com;
       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=redoc.ly
DKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=xx2zpvnzckzho3httttgbzavh2uzeglk; d=redoc.ly; t=1642540093; h=From:To:Subject:MIME-Version:Content-Type:Message-ID:Date; bh=DCl5Vc42yymHaJez97nqRfQLvK76PEQuW+7gj4IbrYA=; b=RH45mZ86dRMNbStO0dnfCBavExSTkqhO+aWRIrCY33WdcWCMwWLMyPWeQFzgbm/a +Kg+9g/duo3jc208MgqU7IXYxZ2e5bZwwjQ3CgVLIsa4noFo02ezfj8M76F6g9Oydr0 dZzVIiuii4ut9sHgyOAiICt/WPI4hKgTA/uYDf5U=
DKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=ug7nbtf4gccmlpwj322ax3p6ow6yfsug; d=amazonses.com; t=1642540093; h=From:To:Subject:MIME-Version:Content-Type:Message-ID:Date:Feedback-ID; bh=DCl5Vc42yymHaJez97nqRfQLvK76PEQuW+7gj4IbrYA=; b=DEw0q7VWVOiBHAYVsiMUPmJK/O6g1lRYj7ix54PjwuVz+UYEWx7cX+54Rvcl4l8j kbRMoQJc5f+895QBwll9nwp2VLfaWaz07QnxzjhrlkuVcdfxm+g71YIvngL6X/YZ9bO 9hSdaQhF663VZyGLkFyp+1MMdGmp2eI1Nrgzv/lQ=
From: Redocly Workflows <team@redoc.ly>
To: bender@false.cz
Subject: Redocly Tips and Resources
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="----=_Part_807462_56629579.1642540093514"
Message-ID: <0100017e6f04d047-12c7431b-a861-46f9-996b-8333fb89cb6f-000000@email.amazonses.com>
Date: Tue, 18 Jan 2022 21:08:13 +0000
Feedback-ID: 1.us-east-1.vfYsUAD2Hem2ARb/YAYrPCD8BPzeyVk6poQYaygjyS4=:AmazonSES
X-SES-Outgoing: 2022.01.18-54.240.8.51

------=_Part_807462_56629579.1642540093514
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

Hi there,

Thank you for signing up for a Starter plan on Redocly! Check out tips and =
resources below to hit the ground running.

Your Starter plan is suitable for individual documenting of your own API. I=
t=E2=80=99s great for learning about Redocly and trying out our continuous =
API validation and API registry.

When you are ready to invite others to collaborate or read your docs, you c=
an upgrade to a Basic or Professional trial (see pricing for more info). If=
 you are interested in our Developer Portal, be sure to activate a Professi=
onal trial!

Getting Started
1. Add an API and connect to your API definition in GitHub, GitLab, Bitbuck=
et, or Azure. If you aren=E2=80=99t ready to connect to source control yet,=
 you can also upload an OpenAPI file.
    - Make sure your definitions are valid
    - Add a configuration file
2. Add a =E2=80=9CReference=E2=80=9D project based on your API definition.
    - Adjust your configuration file to customize the look and behavior of =
your docs
3. Invite your colleagues!
    - Your plan determines how many people you can invite to join your team

Videos
- Top 3 Reasons People Choose Redocly https://www.youtube.com/watch?v=3DNcE=
HOlnAY6A
- 2 Min Intro to Redocly Workflows https://www.youtube.com/watch?v=3DPUOZh2=
W5UT0
- Demo of Developer Portal (Professional+) https://www.youtube.com/watch?v=
=3DGaUgjoL93XA

Customer Examples
- Checkr (API Reference): https://docs.checkr.com
- Willow (Developer Portal): https://developers.willowinc.com
- Rebilly (whole site =3D Redocly dev portal): https://www.rebilly.com

We=E2=80=99d love to hear what you think of Redocly and if there is anythin=
g we can improve. If you have any questions or requests, please email us at=
 sales@redoc.ly. We=E2=80=99re always delighted to help!


Best wishes,
Redocly team!


-----

https://app.redoc.ly
Redocly LLC, 3801 N Capital of Texas Hwy E-240 #72 Austin, TX 78746
------=_Part_807462_56629579.1642540093514
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

<table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" width=3D"100%"
  style=3D"margin:0; padding-top: 20px; padding-right: 15px; padding-left:1=
5px; padding-bottom: 20px;">
  <tbody>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 60px=
;">
          <img alt=3D"Redocly" src=3D"https://app.redoc.ly/logo-h.png" heig=
ht=3D"40"
            style=3D"display: block; max-width: 100%; margin: 0 auto;" />
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            Hi there,
          </p>
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            Thank you for signing up for a Starter plan on Redocly! Check o=
ut tips and resources below to hit the ground
            running.

          </p>
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            Your Starter plan is suitable for individual documenting of you=
r own API. It=E2=80=99s great for learning about
            Redocly and trying out our continuous API validation and API re=
gistry.
          </p>
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            When you are ready to invite others to collaborate or read your=
 docs, you can upgrade to a Basic or
            Professional trial (see <a
              href=3D"https://redoc.ly/pricing?utm_source=3Dworkflows&utm_m=
edium=3Demail&utm_campaign=3Dwelcome-series&utm_term=3Dpricing&utm_content=
=3D2020-10-15"
              style=3D"text-decoration: underline;color: #0044d4;font-weigh=
t: 400;">pricing</a>
            for more info). If you are interested in our Developer Portal, =
be sure to activate a Professional trial!
          </p>
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            <b>Getting Started</b><br />
          <ul
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;padding-left: 20px;margin-top: 10px;">
            <li>Add an API and connect to your API definition in GitHub, Gi=
tLab, Bitbucket, or Azure. If you aren=E2=80=99t
              ready to connect to source control yet, you can also upload a=
n OpenAPI file.
              <ul style=3D"margin-bottom:10px; margin-top:5px;">
                <li style=3D"margin-bottom: 5px;">
                  Make sure your definitions are valid
                </li>
                <li style=3D"margin-bottom: 5px;">
                  Add a <a
                    href=3D"https://redoc.ly/docs/cli/configuration/?utm_so=
urce=3Dworkflows&utm_medium=3Demail&utm_campaign=3Dwelcome-series&utm_term=
=3Dconfiguration&utm_content=3D2020-10-15"
                    style=3D"text-decoration: underline;color: #0044d4;font=
-weight: 400;">configuration
                    file</a>
                </li>
              </ul>
            </li>
            <li>
              Add a =E2=80=9CReference=E2=80=9D project based on your API d=
efinition.
              <ul style=3D"margin-bottom:10px; margin-top: 5px;">
                <li style=3D"margin-bottom: 5px;">
                  Adjust your configuration file to customize the look and =
behavior of your docs
                </li>
              </ul>
            </li>
            <li>
              Invite your colleagues!
              <ul style=3D"margin-bottom:10px; margin-top: 5px;">
                <li>
                  Your plan determines how many people you can invite to jo=
in your team
                </li>
              </ul>
            </li>
          </ul>
          </p>
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            Videos
          </p>
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            - <a href=3D"https://www.youtube.com/watch?v=3DNcEHOlnAY6A"
              style=3D"text-decoration: underline;color: #0044d4;font-weigh=
t: 400;">Top 3 Reasons People Choose
              Redocly</a>
          </p>
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            - <a href=3D"https://www.youtube.com/watch?v=3DPUOZh2W5UT0"
              style=3D"text-decoration: underline;color: #0044d4;font-weigh=
t: 400;">2 Min Intro to Redocly Workflows</a>
          </p>
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            - <a href=3D"https://www.youtube.com/watch?v=3DGaUgjoL93XA"
              style=3D"text-decoration: underline;color: #0044d4;font-weigh=
t: 400;">Demo of Developer Portal
              (Professional+)</a>
          </p>
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            Customer Examples
          </p>
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            - Checkr (API Reference): <a href=3D"https://docs.checkr.com"
              style=3D"text-decoration: underline;color: #0044d4;font-weigh=
t: 400;">docs.checkr.com</a>
          </p>
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            - Willow (Developer Portal): <a href=3D"https://developers.will=
owinc.com"
              style=3D"text-decoration: underline;color: #0044d4;font-weigh=
t: 400;">developers.willowinc.com</a>
          </p>
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            - Rebilly (whole site =3D Redocly dev portal): <a href=3D"https=
://www.rebilly.com"
              style=3D"text-decoration: underline;color: #0044d4;font-weigh=
t: 400;">rebilly.com</a>
          </p>

        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            We=E2=80=99d love to hear what you think of Redocly and if ther=
e is anything we can improve. If you have any
            questions or requests, please email us at sales@redoc.ly. We=E2=
=80=99re always delighted to help!
          </p>
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 0 auto 20px=
;">
          <p
            style=3D"font-family:Verdana,Geneva,sans-serif; font-size:14px;=
 color:#222222; line-height: 24px; font-weight: 400; margin:0;text-align: l=
eft;">
            Best wishes,<br />
            Redocly team!
          </p>
        </center>
      </td>
    </tr>
    <tr>
      <td>
        <center style=3D"max-width: 600px; width: 100%; margin: 70px auto 0=
;">
          <span style=3D"font-family: Verdana,Geneva,sans-serif;color: #999=
999;font-size: 10px;">Redocly LLC, 3801 N
            Capital of Texas Hwy E-240 #72 Austin, TX
            78746</span>
        </center>
      </td>
    </tr>
  </tbody>
</table>
------=_Part_807462_56629579.1642540093514--`;
