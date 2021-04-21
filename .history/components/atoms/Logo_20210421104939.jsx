import React, { Fragment } from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex flex-col lg:ml-4 ">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="76px"
          viewBox="0 0 450 450"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,612.000000) scale(0.100,-0.100)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M2517 5164 c-26 -8 -50 -21 -54 -29 -3 -8 -9 -13 -13 -10 -4 3 -11
-2 -14 -11 -3 -8 -10 -13 -14 -10 -14 8 -79 -65 -105 -119 -21 -44 -24 -62
-22 -150 2 -85 6 -108 28 -150 76 -151 262 -224 419 -165 74 28 154 101 188
171 24 52 27 67 25 156 -2 79 -7 107 -24 141 -22 43 -87 122 -99 121 -21 -3
-32 2 -26 13 4 6 3 8 -3 5 -6 -4 -14 0 -17 9 -4 9 -13 14 -21 10 -8 -3 -15 -1
-15 4 0 29 -154 38 -233 14z m81 -28 c31 -7 32 -8 32 -64 l-1 -57 -64 -36 -64
-37 -51 27 c-45 23 -50 29 -45 51 12 50 27 78 50 90 14 7 22 17 19 21 -3 5 3
6 12 2 10 -4 15 -2 11 3 -6 11 53 11 101 0z m176 -5 c-8 -8 50 -40 60 -34 6 3
8 3 4 -1 -3 -4 0 -23 8 -41 22 -55 18 -71 -27 -97 l-42 -25 -51 34 c-28 18
-59 36 -68 39 -14 4 -18 17 -18 59 0 53 1 55 33 64 31 9 110 10 101 2z m-289
-271 l-4 -75 -50 -32 -49 -32 -37 41 c-37 40 -37 42 -31 100 5 51 10 63 43 93
l37 34 48 -27 47 -26 -4 -76z m422 78 c30 -29 33 -37 33 -94 0 -56 -3 -64 -32
-93 -36 -35 -45 -37 -76 -15 -12 8 -22 12 -22 9 0 -4 -7 1 -16 9 -8 9 -20 13
-26 10 -5 -3 13 -19 40 -35 l50 -28 -9 -42 c-13 -55 -13 -56 -67 -90 -46 -29
-63 -30 -124 -7 -26 10 -28 14 -28 69 0 35 4 59 11 59 5 0 7 4 4 10 -3 6 1 7
9 4 9 -4 18 1 22 10 3 9 10 13 15 10 5 -3 9 0 9 6 0 6 4 9 8 6 5 -3 20 5 36
17 25 20 27 28 27 94 l0 73 42 25 c23 14 46 25 52 25 5 0 24 -14 42 -32z
m-394 -171 c4 3 7 1 7 -6 0 -7 4 -10 9 -7 5 3 12 -1 15 -10 3 -8 10 -12 16 -9
5 3 10 1 10 -6 0 -7 3 -10 6 -6 3 3 14 -3 25 -14 14 -14 19 -33 19 -77 l0 -59
-39 -11 c-52 -16 -66 -15 -111 8 -46 23 -66 50 -75 102 -7 35 -5 38 37 64 23
15 45 31 46 36 2 5 10 4 16 -1 7 -6 16 -8 19 -4z m-8 -235 c-5 -6 -81 36 -94
52 -7 9 12 1 42 -17 30 -17 53 -33 52 -35z"
            />
            <path
              d="M1805 5007 l-260 -152 -6 -40 c-56 -320 -173 -992 -186 -1064 l-18
-94 -145 -84 c-445 -258 -710 -502 -845 -776 -133 -271 -105 -526 67 -613 97
-49 228 -41 366 22 39 18 72 31 72 30 0 -1 -25 -20 -55 -41 -75 -51 -153 -138
-183 -204 -86 -188 45 -376 313 -447 103 -27 344 -25 479 5 220 48 451 140
698 278 84 48 169 95 188 106 l35 19 480 -177 c264 -97 521 -191 570 -209 l90
-33 262 151 c144 83 261 154 260 157 -1 4 -167 147 -370 320 -202 172 -366
317 -364 322 1 5 195 119 431 255 l428 246 -28 23 c-71 57 -191 65 -290 19
-39 -18 -559 -314 -680 -387 l-30 -18 -272 229 -272 229 -178 -103 c-97 -56
-185 -107 -196 -113 -16 -9 14 -38 235 -223 140 -117 262 -221 272 -230 17
-15 8 -22 -151 -113 -93 -53 -174 -97 -180 -97 -6 0 -65 18 -131 40 -265 88
-473 128 -696 137 -234 8 -405 -21 -575 -97 -36 -16 -54 -22 -40 -12 318 222
522 590 638 1151 l27 133 160 94 c152 88 185 104 185 87 0 -14 119 -676 122
-678 2 -2 90 47 195 109 148 85 193 116 193 131 0 11 -25 165 -56 343 -31 178
-54 329 -51 336 3 7 157 100 343 207 383 220 440 263 468 359 17 57 21 117 8
137 -5 8 -50 -13 -147 -69 -615 -354 -725 -416 -725 -405 -2 44 -178 951 -186
954 -5 1 -126 -66 -269 -150z m-36 -502 c40 -237 81 -509 81 -533 0 -15 -30
-37 -117 -86 -64 -36 -118 -65 -120 -63 -1 2 6 62 16 133 11 71 38 268 62 439
23 170 44 305 45 300 2 -6 17 -91 33 -190z m-485 -1157 c-37 -252 -196 -602
-320 -704 -113 -93 -198 -68 -226 69 -14 65 5 155 49 245 34 67 149 191 246
265 62 48 243 167 254 167 2 0 0 -19 -3 -42z m1846 -1329 c157 -126 292 -237
300 -245 11 -11 0 -9 -40 6 -102 40 -795 322 -798 324 -3 3 240 145 248 146 3
0 134 -104 290 -231z m-1545 141 c61 -6 153 -20 205 -30 97 -20 280 -78 280
-89 0 -10 -191 -108 -281 -144 -227 -92 -404 -101 -545 -29 -71 36 -123 116
-110 168 15 59 106 109 225 124 84 11 106 11 226 0z"
            />
            <path d="M2283 4840 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z" />
            <path d="M2962 4835 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" />
            <path
              d="M3585 4834 c-40 -10 -75 -27 -75 -36 0 -5 -4 -7 -9 -4 -13 8 -79 -60
-100 -103 -23 -47 -22 -182 2 -226 25 -45 53 -75 71 -75 9 0 15 -6 14 -12 -2
-8 5 -12 16 -10 10 2 15 -1 11 -7 -4 -7 0 -8 11 -4 12 4 15 3 10 -5 -17 -27
139 -37 184 -12 14 8 29 14 33 15 4 0 11 5 15 11 4 6 14 13 23 17 23 8 69 70
85 114 42 119 -16 256 -135 318 -31 16 -123 27 -156 19z m29 -34 c22 -8 26
-16 26 -47 0 -35 -4 -40 -50 -65 -49 -27 -50 -27 -85 -11 -53 25 -45 82 16
114 39 21 58 23 93 9z m145 -17 c26 -16 51 -56 51 -85 0 -4 -14 -17 -31 -27
l-31 -19 -49 31 c-44 27 -49 34 -49 67 0 20 3 40 7 43 12 13 72 7 102 -10z
m-264 -114 c35 -21 36 -23 33 -77 -3 -51 -6 -57 -40 -78 l-36 -23 -26 26 c-37
37 -37 106 1 145 15 15 28 28 29 28 2 0 19 -10 39 -21z m350 -14 c36 -36 36
-111 0 -145 l-25 -23 -35 19 c-34 18 -35 20 -35 79 0 55 2 61 28 77 36 22 37
22 67 -7z m-215 -231 c0 -49 -11 -59 -64 -56 -49 2 -75 6 -71 10 2 3 -5 16
-15 30 -32 40 -26 73 17 98 l37 21 48 -29 c46 -28 48 -32 48 -74z m177 51 c1
-1 -2 -18 -8 -39 -16 -59 -88 -93 -140 -66 -14 8 -19 21 -19 53 0 40 3 44 47
68 l46 27 36 -21 c20 -11 37 -21 38 -22z"
            />
            <path
              d="M4095 4255 c-22 -8 -41 -19 -43 -25 -2 -5 -7 -8 -12 -5 -11 7 -66
-49 -85 -86 -26 -50 -31 -131 -10 -185 19 -49 72 -117 85 -109 4 3 11 -2 14
-11 3 -9 13 -14 20 -11 8 3 17 -1 20 -9 13 -34 198 -8 212 31 4 8 10 12 15 10
13 -9 68 73 80 119 6 22 8 62 6 89 -15 137 -175 240 -302 192z m56 -25 c13 -7
19 -21 19 -44 0 -29 -5 -35 -46 -56 -44 -21 -48 -22 -80 -7 -31 15 -32 18 -24
48 11 37 7 32 45 52 35 19 59 21 86 7z m118 -6 c40 -20 71 -81 49 -96 -43 -29
-48 -29 -94 -2 -42 25 -45 29 -42 62 2 29 8 38 28 43 14 4 25 7 26 8 0 1 16
-6 33 -15z m-229 -109 c28 -14 30 -20 30 -68 0 -52 -1 -54 -39 -75 l-39 -22
-21 26 c-30 38 -28 92 4 127 30 32 28 31 65 12z m317 -17 c32 -30 32 -96 0
-126 -22 -21 -25 -21 -55 -6 -30 14 -32 19 -32 69 0 43 4 55 23 68 30 21 37
21 64 -5z m-237 -140 c37 -21 40 -26 40 -66 0 -36 -4 -44 -25 -52 -28 -11 -85
-9 -78 3 4 6 -10 11 -28 9 -3 -1 -6 4 -6 11 -1 7 -6 27 -12 45 -9 31 -8 34 22
52 40 25 40 25 87 -2z m182 0 c14 4 21 -49 9 -74 -16 -35 -71 -59 -107 -47
-25 8 -29 16 -32 49 -3 36 0 41 40 65 35 21 47 24 63 15 11 -5 23 -9 27 -8z"
            />
            <path
              d="M4155 3511 c-80 -41 -117 -141 -81 -224 13 -30 76 -99 76 -83 0 4 7
0 16 -8 10 -10 33 -16 65 -16 96 0 169 67 176 163 10 133 -133 228 -252 168z
m73 -36 c2 -25 -3 -33 -28 -47 -29 -17 -52 -14 -78 7 -9 8 22 57 40 65 41 16
63 8 66 -25z m122 -30 c0 -31 -31 -40 -70 -20 -23 12 -30 22 -30 45 0 22 5 29
23 32 32 5 77 -28 77 -57z m-190 -80 c0 -35 -4 -44 -26 -54 -35 -16 -54 1 -54
47 0 49 24 74 56 60 20 -9 24 -19 24 -53z m218 43 c17 -17 15 -78 -4 -99 -15
-17 -18 -17 -40 -2 -33 21 -34 85 -1 101 29 14 31 14 45 0z m-153 -160 c0 -30
-3 -33 -32 -36 -60 -6 -97 60 -51 92 20 14 25 14 52 -4 24 -15 31 -26 31 -52z
m109 47 c40 -30 -4 -90 -62 -83 -22 2 -28 9 -30 33 -2 24 3 33 25 47 35 20 43
21 67 3z"
            />
            <path
              d="M4065 2774 c-103 -52 -103 -209 -1 -270 41 -24 113 -23 154 2 50 29
72 71 72 139 0 56 -2 60 -45 102 -42 40 -49 43 -98 42 -28 0 -66 -7 -82 -15z
m75 -29 c0 -33 -45 -60 -76 -46 -30 14 -30 26 1 55 32 30 75 25 75 -9z m78 9
c49 -34 8 -81 -43 -48 -24 15 -33 43 -18 57 11 12 37 8 61 -9z m-159 -63 c23
-13 16 -77 -10 -92 -41 -21 -66 45 -32 83 19 21 19 21 42 9z m210 -15 c30 -36
-9 -105 -43 -77 -16 13 -22 71 -9 84 11 12 40 8 52 -7z m-141 -129 c-4 -38
-27 -46 -63 -23 -29 19 -32 53 -8 71 14 11 23 10 46 -2 23 -12 28 -20 25 -46z
m93 43 c23 -13 24 -37 2 -62 -19 -21 -56 -24 -71 -5 -12 15 1 52 25 66 23 13
21 13 44 1z"
            />
            <path
              d="M3925 2283 c-108 -59 -115 -191 -13 -267 36 -26 112 -27 155 -1 40
23 73 82 73 130 0 108 -123 188 -215 138z m63 -34 c2 -19 -3 -28 -24 -37 -54
-25 -89 19 -41 53 32 22 61 16 65 -16z m86 5 c20 -19 20 -38 1 -54 -21 -17
-75 16 -75 47 0 19 5 23 29 23 16 0 37 -7 45 -16z m-144 -98 c0 -38 -33 -64
-56 -45 -17 14 -19 70 -3 86 21 21 59 -6 59 -41z m188 32 c31 -31 -2 -107 -39
-87 -25 13 -26 74 -1 88 22 13 26 13 40 -1z m-157 -88 c21 -12 27 -64 8 -75
-19 -12 -60 5 -71 31 -11 22 -9 28 7 40 23 17 30 17 56 4z m112 -4 c24 -19 21
-43 -8 -62 -32 -21 -59 -15 -63 15 -3 17 4 30 20 43 27 21 28 21 51 4z"
            />
          </g>
        </svg>
        <span className=" text-sm ">De Área a Área</span>
      </a>
    </Link>
  );
};

export default Logo;
