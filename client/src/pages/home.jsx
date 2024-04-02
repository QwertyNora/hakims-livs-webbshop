import React from "react";
import { Link } from "react-router-dom";

import { Layout, Menu, Input, Card, Dropdown, message, Space } from "antd";
import type { MenuProps } from "antd";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Styles from "../styles/home.module.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Search = Input.Search;
const { Meta } = Card;

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

function Home() {
  return (
    <>
      {/* Top AD section */}
      <div className={Styles.topad}>
        <a className={Styles.topAdLink}>Fri frakt på ditt första köp!</a>
      </div>

      {/* Search nav section */}
      <div className={Styles.heroNavContainer}>
        <ul className={Styles.SearchNav}>
          <li className={Styles.logo}>
            <a className={Styles.hakimLogo} href="/">
              HAKIM LIVS
            </a>
          </li>
          <li>
            <Search
              className={Styles.Searchbar}
              placeholder="SÖK PRODUKTER"
              style={{
                width: 800,
                borderRadius: "4px",
              }}
              size={"large"}
              onSearch={(value) => console.log(value)}
            />
          </li>
          <li>
            <Link to="/login" className={Styles.login}>
              Logga in{" "}
            </Link>
          </li>
          <li>
            <Link to="/Checkout" className={Styles.login}>
              Kassan{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>

      {/* HERO HEADER  */}

      <div className={Styles.Heroheader}>
        <h2 className={Styles.herofont}>VI HJÄLPER DIG SPARA PENGAR</h2>
        <button className={Styles.heroBtn}>Handla hos oss</button>
      </div>

      {/* Product section */}

      <div className={Styles.SideNav}>
        <ul>
          <h3 className={Styles.SideNavHeader}>Katergorier</h3>
          <li>
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <p>Mat</p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <p>Drycker</p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <p>Godis</p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
        </ul>
        <div className={Styles.ProductDisplay}>
          {/* Content for product display */}
          <div className={Styles.ProductDisplay}>
            <ul className={Styles.productCards}>
              <li>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREg8QDxAPFRIQEBUWFRUVEBYXEBYXFRYXGBgSFhYYHSggGBolGxYYLTEhJSorLi4uFx8zODUtQygtLi0BCgoKDg0OFxAPGi0dHR0tKy0tLS0tLS0rLS0tKy0tLS0tKystLS0tLS0tLS0rLSstLS0tODMtKy0xKystMC0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQQFAwYCB//EAEUQAAIBAwIDBQUFBQQIBwAAAAECAAMRIQQSBTFBEyJRYXEGMoGRoRQjQrHBUnKCktFiovDxBxUWJHODsuEzNUNTY5PS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERIVH/2gAMAwEAAhEDEQA/AP3CREQESZEBESYERJiBESYgREmIEREQEREBERAREQEREBERAREQEREBERAQIiBMRIgTEiIExEQEREBERAiIiAiIgIiICIiAiIgIiICIiAiIgIiICIkwEiTIgIiIExEQEREBERAiIiAiIgIiICIiAiIgIiICIiAiIgIiIExEQEiTIgIiICIiAiIgInyXHIkX8L5n1ARIuJ89st7XgfcSN48R85WfiNFfeq0x6uAfzgWonChrKbi6MCPEEEfSH1ajxObWAJb5c4HeJSr8TpqQCKlz/wDFUt89ssrVuAbNb0gdInytQHr+n5z6BgIiIExEQEREBERAREQIlNtSwuDt+f8A2ljU1QqsxIAHU8pX3q4UbjdrZX9LSUcBqmBw2/PL/IG8+qfEck1GQADkFYsT43/7RqVZb2LgWv3UBlapsUWqVKt79Lj8h+sg7VdXUa70idt7bTRJb1yQbTgmuPN11BblinZb/An85UqcSC91alT1sB9ct9J3oilUFmV3W/7LG/m3Q8vOBdpVatwzF9v7JCC/lzvOOo1PaMNq1VPK+/avpjJmXrtMpKoiFQTYBq1QMT5Kpt4S3RApBh2FO6YJFS5/vgn6mB2qh6Q3v2Z82qvf05G/wnxp9Zvs9RlQXuNvaOpsed9qjpKdXUqWBWkoe/O6358rAg/WaVDVNYKEQXOA1UXv5Cx8IFfV6+hUYLekzE2zSJqfIj+s6aTS9moIdk8QNOoB88recCw31HqVHUqchWIANuQvm2fnOL6yo23a1bkSe8pz0GLHP6HyuHajVqFiz7mAOAERWI8c/lOnE9abWahqQLc/u7fMtOGh7QkgtWXPWx62xkjz9JdraV3ptffgXsxWx9QIHzw+krICprLjl29vorETitKor3DEi2A9Rm+drTG+2IzMqilZDtG6mCRbG05vi0sU6Ckrd6VsYuQfPrnEDa1aVnAHZUWHPLuufipEp6fsTdalKkM2uoZ1uPEhRaXNPpKZXHZAXyLXJx5nxmHxisKVZEDmzBiCpI5WuCAfMQNFzSpEmlVRT4AYHl37/pOzV3YXGppf/UG+oYZ+EyqbqbFqlUE9b45Wziejo0wUFn/lYfnAoUuIupszb/3QFPwDtn4Tu/FjYbUf12hgfiDKPE6aswKsgN7G5DN6eK9JOl4YouAtO5BvYHNyD+EHqB8oGpR4gSLlGP8ACR/j5y5p6u9Q1reUzECoApTINwdxOcHrmXNBUvuxYfrKLkREoREQEREDjqzZHPgL/LMxVqOppkN3cll2ZttvdLf2mHP6Tcri6sPFT+Uwafe2n9qmy/Nmt+RkouaTVbve3WHNSBuBFsHzzPjWOGDKu8DFyMDxwZR0unHaVa/eLOpxcHotgl7bbqq38SJXGvrMHfsQKaA7l7T74EDcboVsO6B1zcWuMmAqomC7k494knHiZY0NNQbmpVIsPediMX+uTn08BPNcV4jXvTNM0F76h0ZarVADyvu2WB6EAjum0u8O4w1cKKCqGDsrs5+6Gw94JyZ72sCBjmeQBIs+2XEhRQaqiqh6bpllv7zBW/ukznw3Vmqtms247rtnPPrMX24qs+hqva3cJZb3sUaxAPXvSPZ8VGNJWrbKNTagZFHagsOTM1xYnG4Ae8MdZR6Zyqsv3KXvzAAPO4PLOfzmhp6wXvdmpbkOVx9J5L2kFemxZdQTQouivtCJUcuwUgPt5qSPdKkm45zQ4vRrUiaeiDBRSbtCX3srH3Wpio471gxJJtcgkE3gVPbrVHfpmFgzVtmPAoxt8wss6LWU1G16qhibAFwDyzj5fOYPtQAfsRQsV+093czM2w0bi7NcnLHmfLpabXs8yaftEp002PpalTZayhqNiRnkrbwLDA28syC5p+JJuZBUao4OUQGo68uYW+0ZHO0vf60UqL1SQ+5VA3c1w1wPdscG9rGwMy+B6NdPXoLTwtWlVDhRZWcbGDlPw8myPG0q0NEqbais+7W5q3Kn3lBurW3KAxXAO0CwtylGJoNcftFZFpOzvqagXkqX3mwLOR8bXODjpNniPEGp1qdI6ap2jFQCzItIFsAGoC2T0sCeXK8xNKfvKlgSX4im3yY6pQD6Dn6XnoOMLuFRjfGsRhc/+3qV2g+Q2gWFsDpIPvhnGb1KlDZfUKAdqklCCxXcWt3FuDlhyGLm4GZ7VauqK9Aqq2WnULAkkizAHaMb8qeq4sfKXdMimlqbqCTqtoJXILGmoa/S1+Y8JT45UY10ZRduwLAYyW73wu0Df4XpXK0C1Wm26kKmFIa7WK2Use7zt1x1zLWpDk22UTgZIKtfry8ZlaBkp0aG91FNdFprOxAQqEw5vgXYn5CX6PFdO4O2tSO1ee8bbcyVY4a3Ui9usK+aWkLZcW5e65t5zS4XoNwJdeQHN75tn6/kZ5ivx7TioqCvfcTlN70xYXO51BVR6mbf25KShnrBFaw3GpZTflY3zA78d0rJTZwwApgsUUsocW5FlIZfUG3jeW/Z6hsNa20JuGxVFgoF1It5spPx9SanFG/3evc/+k+f4TNPg627Q+LH4d5zb6yjRiIlCIiBEmRJgfLcj6Tzmm50PIuD/CSP1M1OPcO+00KlHeyFrFXUkEMpupNjkXAuOonkvZ/W1O9T1Nlr0dVVRl/eQOGHiCQbTNvVzmtzRAXHip+oQCZvEAe1rqPdZNNuHQlqzLY+RUWPlbnymppVt/MfnM/i3dqBs2ahWBsM3pgVEb1UhrfvGEYvtBpr1Da/eogn/lVVGPDFY39Bytm25BpaJtq3NXTm9gALWYgHpgED1A6zvrABW0pe1mNWmbeL0yRz5r3D9Jyq401JxjseycEcgKbLucX6bN3wMqMr2wS3D6nX7gknoSRuJ+JEcOX7qkCbKalHcfBRUS5+Qn17Z078N1ANrLpnGORCA2PkCB9ZV4DeppWUWu1F7Zxcqf1gb/F6RNLWrbvE6jF8A3Yqc8rja3q15b1VTcKz0+baVNpsT3ttQjF7k2ZcYPKV61ZWXUVHN0akrEjF0OnRiTbrk59PKd+Gliql+Yo0UbwLKl2b5vt9UPwDyvtIwVOHkG47YgWNxYJVtn0AmzoFBcLcAaihVobj+ElS4YeA7jX9BPN+1TWocO8e3UfKm4v8bX+Jm7o64AoEi+13c5tcLQqEoPMi9vjINOnUvV0LgWLVDz6B6FQ7T4G4Av6zhVNhoznNlt1yFe/zp8vPyisrX06XzTp1H3eLogQYH/ELeqCTxAgdiMAU6wI8AAjJj+cSjyejrd3Vn8SVqzr5NTqM6n4Mo+U9PxwgprMC13svjgErjPeN/wCcTxHC9UpGs/41cnoWAdiR8cjHji09pqHDEHBH2xLj8JH2gKAfIC3yEgaYkaauzC1qjuD17r7t3qGBt+6Jn8UJGrpg9NOvS1ssP0mil/stj+NKS5/t7FP5nM81xrXD7afDsUA+DPA9Vw5A9GgjbWQadBtK3X32zY9CACPK0s7t9JaDZC6gpuN+VMioFB5322W9791jMz2V1yVabbSe5akbj8VFRTP1THlaaelUCw6pXrof3qu2up/lMo8nXqVF1ddSxPZ1QU3sWIV6ancTe5XduOTew5jE39BoxpG0wZhUDF03MGDovZvUZgNxQC9PKqqjvC2BaZlXTFtdqja69nSzbAZwtK3mRdWv1uB0mzxMffaYnkUrKLnu727PavqU7TPhugi9qxs0qoRa60qZ8hUZEI+Aaeg4P7nx/Qf1mFx6/YttFz2lGw9K1M/pL/s/VqszliopuAyoFyuALlupPhbFusK3IiJQiIgRJkSYHDWLdCASDjI5ixGZ5D2/4LVrKmp0SltVRYKyKQN65wbkC4ubH+0Z7OoMH0lOuTTJfaxUqLhVLMT47Rk/5zNiy48zwrjlOqbAkHtitiLG9/6mdOPk/c+AaqeV+99nrAXH7Ni1/gOpnL2v4IhNHXac7WWpTZhkb+8LG1uZ6i2bnrz++M0dS1Fj2NyFDDa6kjowsbfhLD0MS+lnirxgWZPBdNqSn74pgXJ6d0vy8Zc4uoGnrD9qmyjy3jbf68pkcT1/aGntpVu6am42WwVqNRd191iLsOR8Za1mqq1tPUNCizkEHu1KbBWUhgRtYlrFegPKVlm+11ZRoaycz9lcWvj3CAPT+kwPZLWK+mCE+/TKjpgi15b4qzamlWQsiDaAQx79m7t7Xz4/xDwNrWn9itLpaX/mDEUQu4tsVQrg2N8g8r4J90yLjYrVRUoV2x36IbwF+xQgW8BgeizToVwabN+07sP5yLeRuJ4tOJcJWhqW0NfX6hdLvastJGaysWO4u6qnZ4bkTgDoJy0vtbpaGgTXNoOIVUqOAFqlqlNFDbN5rtdTc4ANibDHU0xi+2HEgaOgKsCvbArb8QKOQfiLfOa+j4jUNPuUa7lTgJTZjZgaZNhzsrn5T2vH+Jpw7S1NVT0qvTXsglKlTWm43kLnxyy4AxOWr9sqT6NNTobValelUakhJAHZLuqNVt7qpi/iSoHvCQxwqPVdqRXT18Bwb0yvMXsS1sEqB8R5z54lw7VVimymFVWbduqL3rjlZSSO8FP8PnMzUe2WrajwSoPs1H/WblalVkepTpm3cULuX3iepxbrKPs9qtTSfhiUtSdmt4jxDtKJo0wCtOrWZmBtuX3ehxfytAcM9gdXT7Vq1fTgM9RiEFRyFZi1vdFzY8hebHAvZz/ddOy6/fS7Ok61ew27gu1lc72Nr2F7+MztDV4pSTUaujUbWUG1OqWppqhtXprTr1aYfT1Dz7iL92fA25z7p+z+m1ei4Ma2qFL7NoUcqRSdHp9ioZmpVgyEAgHcVNvkQG6qaDsae7Xo1FnVVYV6QVmp97YGAye7keRlWhS4LVqUnXdWatuVKgGoek3ZK7FRUUbCQFfF7mx5yr/os09VtO+qqqCr1Kh0amhRp1Eo4AP3aKFL7V8rKCOc1f8AR9w2vpuF6ehVp7K6rWujHAdqtQi5W+DcZF8GFcODajS1kStoaLUqNQuVvT2dpZyO2C3JIYrgmxPUCXdPY1KhGb6kkH93T00Yjx2tZf4jnnM32R4NU0enoaetTpJUpU7Nsqb1c3I7UmwsT4ZsFHw1NLcVqq9AzMPR0ofqrfOGVKiS9fU7fdqGnSx17G7VH9Q1RU/ylri697S+LVWTy2vSqKzeoO36zlw3FVx0WrqPQbvs7Y+Ja/ned9aN2o06391GYeZ7SlyHkob4H1tRb42wFNfOoMWJJsrGwt1x5zQ9mLlNxFgRgeRPOw9JQ4q5CpYXbebDxO02/wAec0vZdWFFd3MqCeXMk3GMRFbEREoREQESYgfJnw469MfCdJ8OPCQYHFBsTv5WnWoPytc77sQLenU5+scRenX+6FQbbX3LWAswIIDqM7TbmcZ9DO3FaA+yEAkhKdxuwQF2m7eYsL8usxl0Zp1ajIb02Vm2McFAKY2CxGRuYAm+fG0istSQW3l77juCm9zkHIBxk3HUYnLgRq0+2qUjtClme7G23O0kXItg+OOs9Rr+GafsmYBPduHZ+htks1+YtMilxBKNA0lY33sTdN1JlyNikthSFHOxIvyJwRncSFOpqO1pr3Km4W2EhjtDHwPveHX5xpmqMW7N6ndAYNu7Msqm2VAzYHl073oeRqlvxKzqQQWqAL0vfcfJRzOJoaQgdtVpugG0bUsC33gZO0W2VPdJ2kHlYgXEDC9jNKpb2k0hRVapXrsVKgns6qfcsABcqwZjbkMYF81OCW/2b0LM6slPVUWq4J7i68XRhYk2FuVsDHn6jhumanruOPRFmOn0gQEkqzJQcJU8hgCw/Zv1nHRjs+CaFUQ3qUdCLAXJavVo7m65JqE/GVXofanh1TU0RSpMgYajT1DuvYrRrJUIuOR7n+Oczv8AZPT0TxGrpUZamuourJuHZBmUi6C3dLEi+bYE9Ix/OfBMg8vwr2UR+Gabh/EKaVOzpqGCk2VgTZkYWIYA2uPPoY9i/ZqnoKaq+w6hqlUCoahqVCjVHqLTVmAPu2JCgAtuNusv8b4U2oeg61EUUt+5HpGpTffstdQ68tp8feMs67htKsKYqqGFI3UWsAdu3cOqkXwQQQYHI19LpqG8dmlBnv3RdC1Z+Ytf3nf0zKntBpdFUoUqmq0i1kR6YpoaQLA1GWmoC+FyMcrdDOGo1FNadXS09NUqDSUnKqWclm06U3pLuALEszWBuTdDzlqodV96NOlEUlp0zRD0WRt7VGDbizYChQ3uZ3i17ZCxR4wG0w1NKkxUsFVf7PaCnv7gJCgd7lew5Cd9Jq69Wg7in2dUMwQVKbAHacHaSDY+Nx4yrw9Nfu07VWohVRhWQZLMxY7lIX8NkAON25yQMW3CbZOAOvSBkMKhZO1tvNMFgOSk3OweIHK/W15A0pFZqoIs9JVI63VmO75N9BKuv1gpODT2NRCDO/kRvLHdnAwST5zpS4qh2B9ys2LW7u4Kjbd3LO8WvzyIZVeH51GoUZFJySb8zWSkdv8AD2Z+BWay6cGotU33KhUeFiQeXjj6mVKevpbioJ3W3MAjG3dDd4qLA7bYJz0nccSpgA3Y3coO4wu43XQFgBcbG69PSUTxpiEGcEkEdTy5Hp+vKbnBae2imOYv9JT4bRSvd2U/dOygEDra55Yv/SbIFsDkIipiIlCIiAvF5EmBEREChxymWoVlA96m6/NSL/O08xr0S9zY3NxtsWxkYBN8eOfSe0qLcEeIM/MeIa6rp/um0muApoaavtp1KTsLkPZXLBCeQIAAtfPLNV2rau4QMVZabD7tqrKLWvhQDtwedh3TbliZtZyapcBAGIIU3axuDuuwF72vy69cCdKPGNHWd6aaiqrU1LGm2mcVbgMCNzpYWCqTY8r2liiu5R2jKjOzAjdyttKk4uQbnpzU88QioNG57wxaxXcoBb9lFNrnB6Hw5TZ0abns1NxRqOaeOd23MG7xLWAUj+I+AnTiNM16lQ06ddsbU20mCWstnUmwDhhcHyHhLuk0OrG3s9KFG8Oe0qqpvZl/AG/CV/lgduD6DZdjiydibNfeKTOoc3HdOWwMC+J24Lw9dPptNpuYoUaaZN8oBm/qJ10vDNWFVS+nWwzYM5JOSenMky0OEVD7+ob+Cmq/neB8M04vWUC5It43xLq8Epfias3rVYD5JYTvS4Xp1N1o0r+OwFvmcxgxV1St7l2/dUt+QnVErMMUanx2j53InoAPCJcGHS0OpPvCiPPcx/ugfrO68KqfirW/dpgf9RM1YjBnDg6fiqV2/wCZt/6LT6pcF0ym4oUyb3uy7mv43a5vL8SjzvFKQ7VrKvJcWHLbY2+EpNpKXZmkaQFMIU27RtKtgi3LoJqcUUrULHkwFj0wLWlGvTZrFahWwPQFb2NiQfC/0kZqpV0SPVou5v2R3Ul2iyuVKbiw52Utb95jnFrNHR07BQHOys9QWdgd9Q1NxuCMfePjwI8p8mhV3ArWxckqaYIyoAAOCADc9Sb2l3TAhVDMGIAu1rXPjbpHDrV4ZTCqQAAL9BYcpclbQe78ZZlaIiICIiBEmRJgRERAQR4xECtV4fQa+6jSN+d0GfXE+6Olpp7lNF/dUD8p2iAiIgIiICIiAiIgIiICIiB8VqSuCrC4MxdRwSoP/CqKR4ODf+Zf6TdiB5ocL1d/doevav8A/maGi4W4N6rIf7Kg2+JP9JqxJgAW5SYiUIiICIiBEmRJgRERAREQEREBERAREQEREBERAREQEREBERAREQJiIgIiICIiAkSZEBERAREQJiIgIiICIiAiIgIiICIiAiIgIiICIiBEREBERAmJEQJkSZEBERAREQJiIgIiICIiAiIgIiICIiAiIgIiICIiBEREBERARJiBEREBERAREQJiIgIiICIiAiIgIiICIiAiIgIiICIiBEREBERAREQP/9k="
                    />
                  }
                >
                  <Meta title="Monster Ultra" description="300kr" />
                </Card>
              </li>
              <li>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://productimages.motatos.com/MS225286/ms225286-1png-8d82ff84-b240-416c-9903-5115fd105d14.png?tr=w-264"
                    />
                  }
                >
                  <Meta title="Chips" description="10kr" />
                  <button>KÖP</button>
                </Card>
              </li>
              <li>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://productimages.motatos.com/MS216891/trocamustzero-af7ef081-771f-4bfc-8698-181524ebe903.jpg?tr=w-264"
                    />
                  }
                >
                  <Meta title="Trocadero" description="7kr" />
                  <button>KÖP</button>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
