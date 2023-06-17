import React from "react";
import styles from "../../components/Table/table.module.css";
import Table from "../../components/Table/table";
import Link from "next/link";

const Display: React.FC = () => {
  const tableData = [
    {
      stars: "stars107j75tcqjp3q23dprhzc6ncv3sgkgrcclfv4ul",
      matic: "0x3b43fDCeA6894d29aF3075D28681a5366e347aBc",
    },
    {
      stars: "stars10mext78584jwhdk0sds0njad7vuwgnfatx9q64",
      matic: "0x39e836EcF51e638F30B7cDF984DD104B1D5dfF73",
    },
    {
      stars: "stars12729ermmmtmzj6hlruzt6syn3r0qsz5nyshwkq",
      matic: "0x41110736B9049d7774270DD903AD2705899E4E0D",
    },
    {
      stars: "stars12qwua09qzwzyq9np7k5t8ggtuuwql5e7gawn7u",
      matic: "0x0487aDe0E395249c932d8cD216048B9643f0e2f8",
    },
    {
      stars: "stars12w9j27v4me83236l00cldnn4k4vcd56z25m8e3",
      matic: "0x41110736B9049d7774270DD903AD2705899E4E0D",
    },
    {
      stars: "stars134g8tp9jc7mv5nps2z7t39wqggse6qgtjn7dp3",
      matic: "0xc589c6aAaFe0a94a0D43B5c402f2C0ee373d9C88",
    },
    {
      stars: "stars134rftr7w2xkhcq9wagx282hzx8l3d6znpnp0hl",
      matic: "0xFd97DD09201aa6aD4566ffDe2984b3C6B1b23bf4",
    },
    {
      stars: "stars13nyn5v2mxv8cs6nj0khrxy9wkmw7ry0cuzrvg3",
      matic: "0xbE3919A28e7038D2862A956EaC8DbBAd27bF7b6e",
    },
    {
      stars: "stars13qpu5wf5uafq3gjujtadufk2q267kx9v74m5xa",
      matic: "0xd69C957Aa14286fDA986A12a40B4CB54eAaf76Ea",
    },
    {
      stars: "stars13sl3xa3qk3te7aezh834ueyeeym22ym03kc7lf",
      matic: "0x521D2968E6984AD56141Fd0335A5E649A176A4D8",
    },
    {
      stars: "stars13stj4dcva0efyew5a9dk2ehp0zqwyv2j0l70uw",
      matic: "0x7E9b39b35A1172f8AdE4E987D46E920583Ca4b82",
    },
    {
      stars: "stars13yx8e3lafk5d00ez9cn85ndee2vzuwy2fvpm27",
      matic: "0x4f4Aab85be4176151e5f52d290cc179Ab6938104",
    },
    {
      stars: "stars142y7tvfszk3z5t56dufy0sks3ejm27yvhcvecz",
      matic: "0x0Afb58d4cc46Eb4582604e04b2F73770CEC3A94d",
    },
    {
      stars: "stars14y0q8r9mdx7aw3khh8l7mzerww2nfu784mk6pu",
      matic: "0xaed348ee46a676b8D5Bf88d3Ee32072117C0D8A7",
    },
    {
      stars: "stars15carh3k9d3sc5wxh7g53acmt7f0qd92dagevrj",
      matic: "0x0902fBd41516bb64CFb93D514D7E40A0C4E47919",
    },
    {
      stars: "stars16s37tywrzvfaypjf4nqzxpey3sued0cqwh7veq",
      matic: "0x19AA837DbfC431781a8dFE2f40046880b649c826",
    },
    {
      stars: "stars16tgexnvy7354ul6ve08kqk8czar5eejf7yzz3w",
      matic: "0x2fC63619fDf0f787b9a4618702014D7C6dCd5d36",
    },
    {
      stars: "stars184ws6f02z6zq96llvgxu0tawppu0ppf59u28mf",
      matic: "0x41110736B9049d7774270DD903AD2705899E4E0D",
    },
    {
      stars: "stars18av5ucdaq9n523guw6hgy6a7ktp37jtdj4hx9f",
      matic: "0x17464c386F5958b53c6a9F47F0B06c4b4186ecad",
    },
    {
      stars: "stars18u5kla8lkexmwyrxvu234snwnj2r2hz0qje6dl",
      matic: "0xc39c3e90931682e7C4BB9656eCaf40FCeD6EA57c",
    },
    {
      stars: "stars18x39u0h9s7722nf5zezwyrfxr5uka0waxawlfd",
      matic: "0xf4e7dEfD6EE0DF55f74e1ff7b50B58Ac5a1b0807",
    },
    {
      stars: "stars19769yggfvkltw74g5q05mjts0pvp33chalx6yv",
      matic: "0x41110736B9049d7774270DD903AD2705899E4E0D",
    },
    {
      stars: "stars197azlmrp8wvz4446jfnxu605snegznl4f2wvt3",
      matic: "0xA75caC7b3aeC9110B4267D3f34A3B90457F48bA6",
    },
    {
      stars: "stars1aemxqhtvwney5kajlprh9ssjyhpakytmweheww",
      matic: "0x98acbF4317c553A323D93067c409a1928B355889",
    },
    {
      stars: "stars1algjxvnhf9rk8hxmjjc29saae848adhl32pnad",
      matic: "0x42E0f14DC22B69a4cd3FC3953231C6C9ACAA3012",
    },
    {
      stars: "stars1atyqhztej74h8sfwhc3v2rt78z64cq782urvel",
      matic: "0xFb4e78AD14d7b9C00641708315D81f27f340984d",
    },
    {
      stars: "stars1c36py3de66vmdx6ss98rxwzzpw43m3f8fz89uy",
      matic: "0xA2A2602bC84371E6A7af8b88467E8b3f10aa7658",
    },
    {
      stars: "stars1c7qhmdnxq45m67pcaj7ymzzgcxveg3gqjt8d88",
      matic: "0xf4bf5D9FCF638dFDF27C24a8C7Cde4652C347d34",
    },
    {
      stars: "stars1c8qxw4dsj37dy0s2dmsc34ahvkredgna7rd6u3",
      matic: "0x39bE6Bb37a6F52b5BFc07A034b7Fc28f9963f083",
    },
    {
      stars: "stars1c9z7jfdm5w0h9shm693y9y5tmprusr6423wusu",
      matic: "0x9de11EF85ca389D243Ff76eC3AE2Be3a06944ED7",
    },
    {
      stars: "stars1cclnhtrf8xh2agjwu2hsfqvc2a4ac5eas0ad9p",
      matic: "0x9847d3a4c656E5A53eB3bBfe5C44654840371B8B",
    },
    {
      stars: "stars1ced7rdsazrzfzf2n39q8saduf38yfkackrxqx6",
      matic: "0x497fb4df8820426d4f0ce29a66444891902072e6",
    },
    {
      stars: "stars1cfvxeq9606pza3h9s8rntj0qjsy5spjt98qtx0",
      matic: "0x65Bc3149115C228A08D922D9f203230F9A89EFcC",
    },
    {
      stars: "stars1cy00d8a6d8lcqrpungcrx9ngxaqt7n2kpx699z",
      matic: "0x1F50F483C9847d89B6b266F473bcA0C74C1c6e51",
    },
    {
      stars: "stars1d7ncx0jzh9wq3m9hkw44j5jf9fxl6xvyxmqy7h",
      matic: "0xD240d2B55b6449A02e869eFCD57360B311FDd1bC",
    },
    {
      stars: "stars1dhwc73cg89f05wn8e49yc4nnr39ymn07cf6nfe",
      matic: "0x768F8ECe2601a05C5D2bea98013DFD91EA6740b9",
    },
    {
      stars: "stars1dy6c2gvg0802ujsnkhcg3f0vuvqwypu3kay4gj",
      matic: "0x65a31Eb4574bFd93a6b1cf24b36BdD736dB15660",
    },
    {
      stars: "stars1e8qch8fhs5seln80tz42r05q5ltsz0wv0mft6u",
      matic: "0x237badbE775d631fdfD5B96Ee2C9150490B89ac0",
    },
    {
      stars: "stars1ed8eahr4mnnz296gjetc3lhj2qlydjkqr8arpg",
      matic: "0xEAF4e1d01E253B32915fF1042fC6Fbd853bE23d5",
    },
    {
      stars: "stars1ej3tct7uczdpgeeg3lmy44cm7fty5mpfp6rzef",
      matic: "0x33A47c6708dd08E07c1b1BbB02F3EE22d462E673",
    },
    {
      stars: "stars1f33tsvxglkn0j7045zk2th8d9hrd9snchwrj0r",
      matic: "0x9500E9072D81Df8A933Ed4E309C1Dfa1d8093741",
    },
    {
      stars: "stars1f6m95hk3xyrcvavaf3wzdr7nz4uvl00dzrc2e4",
      matic: "0x41110736B9049d7774270DD903AD2705899E4E0D",
    },
    {
      stars: "stars1flhs29gr32y3xywvxuzqxymu5pgvyyat0r5epn",
      matic: "0x3e6260223D6820099410c3965B6dEff122838ce2",
    },
    {
      stars: "stars1ftkdaf64j80fvdxc93n489djm0hd3830xs6ksf",
      matic: "0xF9Ab010479644cc54A2a40e54aC25168b5044a5e",
    },
    {
      stars: "stars1gk6h6lswwqer8ulfgfvy64nj0p42xd9dfpwxan",
      matic: "0x7189f91931aB3dA6A94f880Bc2F2b31dF91ABF9d",
    },
    {
      stars: "stars1guy40596xzhps4wqlddvmnqv80yml6n7e9hdqh",
      matic: "0x475492F950Cb314e53a4b1DD3820766fC155d908",
    },
    {
      stars: "stars1hp2806xfq9axppemd3m0dmngmz6u7dxu6rshex",
      matic: "0x8916EA4207c0a7E6a3145E98dD81E3B8BA9A7d50",
    },
    {
      stars: "stars1j2exvgumqhutx6s9gl2n40lenkslgvunc7hcqr",
      matic: "0x08E3Ddb4F042fB160a91149A6F6837169d5A28A3",
    },
    {
      stars: "stars1j6yw6aldlctpaz2na3awsnexle3a8k6z8x9744",
      matic: "0xB74e3feEFD937ECac8D0e0A7c5dBE1E2645A875e",
    },
    {
      stars: "stars1k278k46nsvnc9ahx0n94qwt9qul7vea6j07m2t",
      matic: "0xd0c5d086929FDb91009765cc522AF965dFb4b158",
    },
    {
      stars: "stars1khfrzy6fgpxu6a7lzj7xs43rsmr4r8ty6xf40u",
      matic: "0x3B6a66017B75F04E55c73664Dd6A9cf2C8027E0e",
    },
    {
      stars: "stars1l2caj2pwwlwkmg59yyvnp94jdu7shtp22yv3th",
      matic: "0x3bC2B701AF7d219b5963145eBBC1AE344F33c731",
    },
    {
      stars: "stars1mk2yasfjljrvrxrjwj5823xh6lctkjc9lq28ch",
      matic: "0xF062AFe44F6d762d45b7D6ee1aD0d3E6199D84E4",
    },
    {
      stars: "stars1musvsfx00sraa2mw9emh8kvufxryymrad3vtcs",
      matic: "0x160a607e196Fc2880E9A031644119b22692281F7",
    },
    {
      stars: "stars1mvk8603ksv5spt9epgruemcqdh3qruze93yp4r",
      matic: "0xF3c0bD6156672F7165776a7Be5eaB7e2A500A14B",
    },
    {
      stars: "stars1nxnnr76g9q0hufnyy6kmzuj05r5sz2p3zma0ay",
      matic: "0xCeFF77bFCA0DE3F8367cA321796e49d0503989D1",
    },
    {
      stars: "stars1pumcg7jzk9rftgglv5l2pp9eylvksjz07v08wr",
      matic: "0x0c7C43d04F8eD28D633A442e93bFAc3b0f24Eb17",
    },
    {
      stars: "stars1putnfc55293nlchxl42adn026n9n29j2nx2dmh",
      matic: "0x787A62a53B32f445f13AE0Ee80215f7e74866AC1",
    },
    {
      stars: "stars1pvjdpz5t23hy7wfv30cj03hhs3rufkpf9fredz",
      matic: "0x056982a04D5a6847bcd5DfEe9d8bDf4348775650",
    },
    {
      stars: "stars1pzwel4a5ft2256au8xqy89k04yxavgs56myxvh",
      matic: "0xa03337Bf51E900885A6278D005DB0b4E67B64bd4",
    },
    {
      stars: "stars1q9t5fa4zhv9pn52snhyga4y54fceyhrdu9z0qk",
      matic: "0x2C839d134f84691E994948a853748422f4fdbB5c",
    },
    {
      stars: "stars1qdng8vpnlmrv39u8twur5zqf4gg4splyjpamu0",
      matic: "0x0E14B09cD66728ae56580c00a5cbEFa4BCfB753F",
    },
    {
      stars: "stars1r020k5d5p9sc2ytpa38dt56vup8m42yajfgs3a",
      matic: "0xB8B78925029c84bD9514c0Ba0EB1CC6Ff4bd9c86",
    },
    {
      stars: "stars1rafqlhkvz38d9jhzkxumr78nfg8gyce4w5r2kr",
      matic: "0x98acbF4317c553A323D93067c409a1928B355889",
    },
    {
      stars: "stars1rqx7h77w3gjvwxekg6uecnfsxjdz98hpu7uvj9",
      matic: "0x5eEf5b8841F82c5d7B83DF69Aba3C122795e787e",
    },
    {
      stars: "stars1sr8g07qscvcevyr0pvxj0lfxunru4vampf2pum",
      matic: "0xf4bf5D9FCF638dFDF27C24a8C7Cde4652C347d34",
    },
    {
      stars: "stars1srpn8dtutdyztx28eg5arqw2u657u6rdp95ktl",
      matic: "0x52E0531179D9459C15D2A8A438cff6B5F1ae2c0F",
    },
    {
      stars: "stars1t52793w5rr8z4c7yxwjrqeahrp8cckl29ea68e",
      matic: "0x83e3E3C7da33280664BEE1b63b89D5b845a9e51C",
    },
    {
      stars: "stars1tzpeje0gzk3z5fhazjusxrcgrtt6j05yf4d8gy",
      matic: "0x8d7B70E8A986e1eBD758959520d7C73339c32595",
    },
    {
      stars: "stars1udukg2mkycxnejxkv2974c0vrn8s6h9sl77v5h",
      matic: "0xbdDcD6294312662E255Ee0aE5DB199f635832556",
    },
    {
      stars: "stars1uhryuw296lqgaz3j22mhc8aym0vegrevzsv8na",
      matic: "0xd695C80A722495180Ad2fF689fEeF975CFCc6150",
    },
    {
      stars: "stars1up7p4uhgzfzrk6fnqjes0wty9rv7q0yxqj6nwk",
      matic: "0xD12d54537C76c7500aB9bA300519cd276A50a41a",
    },
    {
      stars: "stars1uqaaqkc4jxhxf7qm357qce2xdaljkh07y6j8mn",
      matic: "0x967DB255812EB2BB9296a4E1b15e67cf27f790F5",
    },
    {
      stars: "stars1utr666xsf5cwjr5yg8crwrz5mn8wjcaymv429j",
      matic: "0xa7b44C5f9d66CfEFfb396353F3A6C1d5DdC53664",
    },
    {
      stars: "stars1wkg2l5mkuxn7sxewr95ns6qvyvwmyzxk98vlwq",
      matic: "0x914e175924379010635F6f7072D99925ad6aBa26",
    },
    {
      stars: "stars1wxvcexypw28u0u5vwplr0pxvvmftgveqyx0szm",
      matic: "0xcf4a1183Ae37f94D1334145C32ad3A079b24f356",
    },
    {
      stars: "stars1xc8tjcmhfdn7ld2qgcc6s92r3wsp2x6hsg85ef",
      matic: "0x9873b4bDEfC0843a79F804De15640861D7886740",
    },
    {
      stars: "stars1xpy205ztgm9qudu0zwucw9qvjvgm2d6sa0kzgh",
      matic: "0x24C9DaF2Bac73D1d5A493962D07620e6c20024E6",
    },
    {
      stars: "stars1xsnlq9mzrj40p2cya8pvupjqgquaatg706w2l8",
      matic: "0x6FE371BC4A6e40083BeaCab3F499Efd4a0D4561B",
    },
    {
      stars: "stars1y3gjlu3rskpqghcrmt9l3uf2ytjzwah4naj5tv",
      matic: "0x94def13CFB8BAf13c62d18b14E402616A25AD444",
    },
    {
      stars: "stars1yqtfg4sd620mvfg5glx8xcm5mj8wnx5mj5zd94",
      matic: "0xd481C12E459538e4f16195CA10c4d73821c5a3C4",
    },
    {
      stars: "stars1yy7fpny3pkfzj9zdsq8s0p3n9ldjscrmtfprqk",
      matic: "0xFb4e78AD14d7b9C00641708315D81f27f340984d",
    },
    {
      stars: "stars1z36sr65edv9hc8hue7g05tm3ya4n4s674nxxr9",
      matic: "0x052Cb6a1D33bA1B0A37F4b51CCE1919B293Bd597",
    },
    {
      stars: "stars1zcv66fuznlfjsaehfhllacdj5uvf6nau4xl2kk",
      matic: "0x5475c09f1c46Ff053687752D30734463a228a966",
    },
    {
      stars: "stars1zfh6ccddln9e4fkwse7fcquvecpnnxyknlp5z0",
      matic: "0x5fA275BA9F04BDC906084478Dbf41CBE29388C5d",
    },
    {
      stars: "stars1k60eaacdu2xw959wxvzqjtv5y7a20ak5l7gesl",
      matic: "0x21e0b2Ea72ca89De74acA4b2eA37c0DE8D7A4D26",
    },
    {
      stars: "stars1pf2q6r6jt9na09y0lvayx2t2hsp6hngvuccucj",
      matic: "0x52eDB7397e36BA306104B629855c694Fd4747e51",
    },
    {
      stars: "stars16l3nh784ppmdl0uerc894h5ll3sg7j38gen7mg",
      matic: "0xaE1CCcbDCb6BE0b72BEBD93dF448f8096973Ee4B",
    },
    {
      stars: "stars1js0nmypuz89raj4fdtgl9qph96e8x3760ha3nt",
      matic: "0x4D38309B4753eB1327Fd728A15E3807a3cB78E14",
    },
    {
      stars: "stars1uda9jqj2gvkcphm8f0mj6ydmz4xykz5l9u7z9h",
      matic: "0x31b792194af47fe99319b009f32a82f6891d3317",
    },
    {
      stars: "stars19jxasz22u3d5sx6l4c8v9z79dffds6e4r0hrz3",
      matic: "0x1014cd00144928D55f2d9cEB653B6cFF3Add3072",
    },
    {
      stars: "stars1z99qx4a3rnlka0nsw46faseepntcp5tcveud2a",
      matic: "0xBf3AFa426BBdc318742649c9915f9D0B75116937",
    },
    {
      stars: "stars15wpzzsc8jk8ppezt2u535zg7eydw3kn9a9c9er",
      matic: "0x097d2E56912f80E5a3e4c87D72f0bC38Ca991cD5",
    },
    {
      stars: "stars1ydrskl8w27n3dyxzgl233uazpgxarerdd8u5cm",
      matic: "0xF141C062F5E62E8F2F621A4Be402e82779aB4B88",
    },
    {
      stars: "stars1tw2w3nha339gld2qddkwrn72kjw9h63mzkjr3g",
      matic: "0xF141C062F5E62E8F2F621A4Be402e82779aB4B88",
    },
    {
      stars: "stars10z6mwcv78kmnj4lm74ce3zydrqwuh5qhtcqj8n",
      matic: "0x593Ad68197485F544CF8e9331563EcfAA574D89E",
    },
    {
      stars: "stars1rtftgpzdce0wna8vd9k7ymgpxtmqh02zsjzj67",
      matic: "0x60d74E1b33cC21600134f24DcF36E6c635eCc4A8",
    },
    {
      stars: "stars15hz829wam3wc3k9jlhdrwwdl93050k296la598",
      matic: "0xBA6e83FD59f13393720D4dE07D5cb0B731Ff8700",
    },
    {
      stars: "stars1hheryepdqyamzy4vsh7alcjlwq5k0kfmsusn9v",
      matic: "0x064e87591c880FbB55A06107DDd0E5743DFDB9Ae",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h1>The List</h1>
        <div className={styles.Box}>
          <p>New Turn Around Time is 6 Days after Burning</p>
          <p>
            First make certain your address is listed correctly here before
            burning your egg or APUNK. To list your bridge send 0.8 STARS with a
            memo containing your preferred MATIC address to andromadao.stars AKA
            stars1dpkd5s0ujarjehttkectx48cmv8tr3vgz8q2pc
          </p>
          <p>For more visit the dawn thread in the Discord</p>
        </div>
        <Table data={tableData} />

        <br></br>
        <br></br>

        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link
            href="/"
            className={styles.mainButton}
            style={{ textDecoration: "none" }}
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Display;
