import { NonEmptyString } from "../strings";

const aPrimaryPrivateRsaKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAhn/zS3oYEUORgxbWCp4VQomR4io5g/GLKkZi0pfjSFElIFmf
oSnsztEJP1OxC7SSGiJjbozvVIRvH/2icpj9wSR86Er2f+yvmvKA6fQ1PMsVEfns
yvfkDUIurpzCksSp3kR0IUgIiZaLcAGfig7qSlJEXUb4AKdMSnzqq9QIUNRSb+s3
4lF9yiuced0HypiQKmf8652aC45RBB3uhhIkB2P7tTE3exLyHJQlg52Nzm0ZEMpE
B4mqeQLUKWxnF0GqejVVvAUC8i6iJ7hPQgS95qKgSl8qk0ATYruXgH6MdAYMiQkC
DCDdo+fRwy2gEmjA9uvNaUHo3gAxCcP6717nZwIDAQABAoIBAGqXztZ7bcWI2jKd
D4ccn9a6tl4afrid3l/jpoAmFd+DR7wqq0MLufxyWDTS/BY9xihmJo0/rpE53+Pn
nC3cKAdBBqkGd/MMPmO7WwWPH/4NKKa1fr+g1CDZ2atS2zV8HO/lKnAR6Yo5QErF
To4Yof/C0SFnlDbYX7MM6uLAyNJdPNKOrbA8I3Hp3t6Lg+AhHPxamnT4JYMnGeaD
uXzJpEHX0WBIKlihLhZ1npTAUcK5mM8BBBybvNpiN7iTJisuzIs3uR3PAoReBLio
fuIq6vUg8d9YM/d3TiMqn0agv7eDG4gv2xDPdWjJfiJmZ7Cyh0x7x7Br0FJzjQgj
cOWYesECgYEAuzKMkfBzRoRuW7UQ51mGu3nF79c2EjXn7QP3db8OsJivqFXNgzJ7
CyZgdz4vAMNxvJNBW+LP0GHaB4bxtPMwyEiM6jh8EM2yc4ejgD3RFInn45nlyY15
L5frFiw4cfHleRvA30ES1sEyAgzuBL7HlPKrtzUdK6MGixosS2nO7scCgYEAt+8R
QQqn9y1iXGmkIwax8HY33BlLuXtC81z/PjSKvO3fnqQGrcTEuMFlQUhPj4lj+8nC
rWm8VXMIb5p+w3CFxxmWxeREop0P4oKzBHYxR8K/WHWnG39qNaI08DjsaVHJLpxN
GltLlla8a95Y1QsJSMQ+aPpa51dbLtiqg4HAImECgYEAmkuF9dxdB6isVcaekjIG
jYxHi/K1TLlF2uREGbdK4mBXmMZwSE1Zgc02AdMtZtGxc59kZdpDNB0TWtTtcRpq
AQtbqsq36BnDltob99378ZPhoIX/EuwbERGE4Ze9Rp39aJ9pkBrQ7lX7ZBlILn0Z
gDmtM6sByi/resgt7lLeD40CgYAi5waLJQ6CZOZJSvKOgvK5AnXPGi24YJ9vtrHo
h+fbufe5Dr8FslTyCiDApowSXKvQV5TNe0b1oAJ1ywdK5ss74KsvmgU8JjmhbdOy
gQsQ5u+QRaMUILVyv/jzrJmP0qkuYxJuceyB9quCfIq2woVcfYCqQveE9pqi5RJW
KgTfgQKBgEW10NmIEhjBBS/XO8V6cNao2R4jIXmPZM1LNpd9ORvNAWbtKcBOwcP5
z5mQHyAPnEXUMa8iNz4epxfbWqjPItMIjVwp1OCkKjEdYx5cYJ2PGUQv3W/WFMPH
CaGf0g3FQAWM7QRpyvxxf2rJGYOsY93tptfR38aUXqNl7r0j9Q2/
-----END RSA PRIVATE KEY-----` as NonEmptyString;

const aSecondaryPrivateRsaKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQBtSl/XuZLqHpZeTjyYJzAMSO4085XPeqw3RzUCBK+xyYb6Lfvd
BM9RK5+x8ct/2VuMeSq8l2Wcj0T83NseyNnMFUtktoZhzjcIOV+wi9txAlNzFKYA
pcgyqb53N/zgTEL9jh1rJY2CaDbY17la/vMgkj+yOgjZGOnRD0f97F4AhMMGaMrt
tsErgTzAnrCVu0ajddqC4+UYT53yGqT847K9gQZ1GfmZJALsr5jfZErr/+K6i5uo
V4w3STUwCzP7u8d7fm/Vv+A+ipMgwQ5VsvEwf+nm2gdAQdTdm7K8ouPa7iOi8zUt
Ipnoahx68+yRn8+cTbXT7jxj46v7nuuze2b/AgMBAAECggEAGMR2G+lORghQg2av
jLu0w9PzR8S7+p0OUiis9pwhROUq1Z9+KIRihz6fni/xsjOL77W13a9hs600MSnL
7poN4ZYh090ZbyjQh+iYquXHAUFJsBbJ1/O5/uFA7LufbyVZOSTvvcxw2VDMvS+G
Lf0BFCyQis9kGe7vbhVMd1sNoogllkEEcOG3lk8J0JoSdidajrJzb7gBqabQmWZg
9dOyjfX4BkgNoEno5ZIHtqzLy8ZGi8+Ai7jzcObeIOBA3ZHyBoGKKIFd8SFJ2eLU
z2tctgEo4l/+2SODQLPGLJe2WXkSThSNicM8fiejcNyB4xbFajlRf2Iq4m8VtB7o
mmeawQKBgQDWKukVfaeFQchdb48ZQOgXte2kTIEAoWxaxvDuUAbcIPG/pzNWY5ag
jMoI8Op/dC5SPeopvGHR7lY5Lq2MJJOucpClPst7n8Ow2/OWXA0izyl1wdAAV5GN
A8mqegqP0kpqN4XJSSbHI6GVRyAAO6OYUW2WLqI0flhbpV6CueL5yQKBgQCCo0Mg
esctKGsqwDSQFojYo893VHTuxyI9t9UTMtCydGxslTmmuDb5K6dH8FQbb8j5mE/f
58wZH79/bDFK7/9+uU16cCVNnittErxBH6Js70Roo3kCrwIdK0N4J5qw0N8XaLBx
x7O8IU7PLKiCGHkjoB2hDAihbl6z6PXMB3M+hwKBgHGV1ITHXb95AhE8B4L3P6DD
pkPLJ2f0NQl4FXPvEZRSDKT+wmWA7/Q6dzSCwXvTXHXVzIlSFfdHFofBT93R0Flm
/XwGb9kjBKCaJviJ3ZWmlXCU2AI2b0WAysYVb+CTQVBQHi6BE4XuSdZoIHq/Jqa0
GRDbrr90etwwOo3OlKixAoGARzrp4Q3RCGhfdqHyhxYia6118+TTFVby7qALyDoO
3R7p95KuKp+LKfWJcoox8fvTo3RPKRDkklZjPgEqJ2gQ8XHsMvRvApFZsFFk4EV1
dNxJepyX4MS37FuooB1IFVzuJ39npcJz2AJ5TDFXeAgMFUa6oRNEqXDaplJBo4v0
ZIUCgYBr8uzTssSeuvJE0Dpi9LQLgGsDcwcc5nBwqpoWueBgW2krg+v9Fv3g6Lrx
8hVMbivh0o0rxI78m1H3PCcbRO4wdFQ95OMAl9DXUFamqdzUs7Zd6WjOO54jh/0e
R3EL9vJ+fqOn7HOIwXeLw8C6SMJLtyNVmyJ0YfQNG9AqCr42Fw==
-----END RSA PRIVATE KEY-----` as NonEmptyString;

const aPrimaryPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhn/zS3oYEUORgxbWCp4V
QomR4io5g/GLKkZi0pfjSFElIFmfoSnsztEJP1OxC7SSGiJjbozvVIRvH/2icpj9
wSR86Er2f+yvmvKA6fQ1PMsVEfnsyvfkDUIurpzCksSp3kR0IUgIiZaLcAGfig7q
SlJEXUb4AKdMSnzqq9QIUNRSb+s34lF9yiuced0HypiQKmf8652aC45RBB3uhhIk
B2P7tTE3exLyHJQlg52Nzm0ZEMpEB4mqeQLUKWxnF0GqejVVvAUC8i6iJ7hPQgS9
5qKgSl8qk0ATYruXgH6MdAYMiQkCDCDdo+fRwy2gEmjA9uvNaUHo3gAxCcP6717n
ZwIDAQAB
-----END PUBLIC KEY-----` as NonEmptyString;

const aSecondaryPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBtSl/XuZLqHpZeTjyYJzAM
SO4085XPeqw3RzUCBK+xyYb6LfvdBM9RK5+x8ct/2VuMeSq8l2Wcj0T83NseyNnM
FUtktoZhzjcIOV+wi9txAlNzFKYApcgyqb53N/zgTEL9jh1rJY2CaDbY17la/vMg
kj+yOgjZGOnRD0f97F4AhMMGaMrttsErgTzAnrCVu0ajddqC4+UYT53yGqT847K9
gQZ1GfmZJALsr5jfZErr/+K6i5uoV4w3STUwCzP7u8d7fm/Vv+A+ipMgwQ5VsvEw
f+nm2gdAQdTdm7K8ouPa7iOi8zUtIpnoahx68+yRn8+cTbXT7jxj46v7nuuze2b/
AgMBAAE=
-----END PUBLIC KEY-----` as NonEmptyString;

export const aDifferentPrivateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAiST58WWitzjy0dJ04kGvJqG1ZVPqAgWc0ixNy4ttxh4Pq2bW
6DBVJAe8qXCM4m3EXCrcO83nH6I14w7Owl/u4Rch51JFnI02RQuZF8iCh9ROu1w2
qJRLKAm/ivWXHflssNH+5F8/S9WIarZRDCbr+54k7eQ3/PUfzbi/NAy6cgtBuIN3
DJ/hzUfCp/emWJZgWgiCSjO20KHDVaPaP4PQTe+yWZjIe1by54+Icw848hnor6W8
wZFwPqo+2cu+/m2cKk76leCruwTTd7uZv5qpALL8EWQlCsOhYjZxYSq/Lo13F/xd
yr/wogQktcdKXmx3Zoe2G+6xvd3ouzQTXVhwmwIDAQABAoIBAEDKuVK0g6UwQHek
iBgElC0aJMrUVC/UWvxodfB91MTOmvSNR2a2vuKgzR73z3eCCEzK6vVOF604Q2Ec
M85c6ExrU1cn5T9K76K7Ef7Mee6V/QRDUodeWAt4X4fU8yn0FseKznMyFINNRH+1
1qB5Gu/rDONe+JyHahkU+TAr+0G5IavaFsNhODManf53ArgI/85adxky80jTkNdF
Z6uuzioeErJpEOdBXkp+AAzZwVUMKEdrF9SgN78XMWQAMwYqO6KU1gjpycbxLRw3
PY9g8IKjUtzLlq+psLgVHzpVLrZ2JCRFTs3EHwlSqn07VCQU6/rmmzMaVeAPyo/F
G5AizLECgYEA0HI/ze15qxfPviS/hoHZkykxSnUD060LNk0xRKLzG42u+vIkJJGl
1zyTOLp6y0GFQMSEJZdAZEl7rF2OzmUofywgXxJy5v0PyAqXoEQdn179ka8v+k9E
DaKNUVP0mMxaAlkpkutXx7tSg1pnDvjgPkos10iacUOZa4401r8JYFUCgYEAqG6I
TFLkTZeyUN5kg8ruzxTPK135yu57kPY0tsZMmAlCUE/tIVJ/Td+ilJaMq+BkQmvs
AJIVBDlz9Hha+l5j1uvjj2kroj21pMX82e0BtcdyMwCRs3pkNMxtlVUPDJs2IUQp
M+tnl0UJV0ZTmngkdOhoxtVmZpc5vDMaCAF9vS8CgYEAilYobhxakOfeoUx2J2hp
4zaFVerOvV6sgD8+oVSbjv+6zySARBy9OVkkQ5PPBrHXI6LIKMJ2o5f5Ee2NZwDP
nYbFfRMbWp08KgCNnHlYR3qdQmBHsRGGEp58tyrGu9lzKvfNlYnG2fFB05bdqpwV
BoHnvICcruq0GSNpgdOK/3kCgYBHiBHYoEeXcHppf9meYzwCtGq7l0Cz346Y5QdE
LHlxBFWmeBtUUI4CS5znj/yULktGLkFfiKrmTWQiik7RD+9E4o+VY2wFjkGrhe45
uz9DrT2hzXcTi0ItbjiH+ETY7L4TaLg69ZncE5TA/PwamTWadO2yrAS+QzFg7S78
AW4ePwKBgG9LN0px8yFBB85aeepay9w8njs6Z5H2Fi9XNrujEQgiZyIsx4JdxfGw
3ZmRjokBAAi1Ne1DfIyW886NYLt42/q7CBHTylWGxBrDkYSRqznxiveKCiKyVvyL
oPDnGMxtDJnegmDZy8kmbmr7QHBTF6J+0L09wEum38DDvh/NIpzW
-----END RSA PRIVATE KEY-----` as NonEmptyString;

// ---------------------------------

export const aPrimaryKey = {
  privateKey: aPrimaryPrivateRsaKey,
  publicKey: aPrimaryPublicKey,
};

export const aSecondaryKey = {
  privateKey: aSecondaryPrivateRsaKey,
  publicKey: aSecondaryPublicKey,
};
