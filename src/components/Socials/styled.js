import styled from 'styled-components'
import { styleguide } from '../../constants'
import ReactSVG from 'react-svg'

const { colors } = styleguide

const SocialsBlock = styled.div`
  width: 4.8rem;
  position: fixed;
  right: 0;
  bottom: 13.5rem;
  z-index: 10;
`
SocialsBlock.Item = styled.a`
  display: block;
  width: 100%;
  height: 4.8rem;
  background-size: 4.8rem;
  background-position: 50%;
  background-repeat: no-repeat;
  transition: all .2s ease;
  background-color: white;
  border: 0.1rem solid black;
  &:first-child{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU7V53///8yUZogRZXn6vKKl785VZxAW6Dh5O5yg7QmSZbR1uU2U5skR5ZNZqWps9DK0OKTn8QrTJhlea57i7nw8ve+xttccqva3uqyu9Vpe7CPnMKapsjj5/Bsf7K6wtkAMY2Bj7sVP5JTa6j19/ukrs1FoiZVAAAD+klEQVR4nO3dbW+bMBSGYWOIkzrmzSRpurbrutL//xeXl0bdNI06YfY5x3puqeqnUi4BcYKBqOKjrh+WKpeWQ99dYOr8q3VWO0O9Yv8t47R17W/CqrHU6xQh21QX4d466rWJkrP7s7Cq89k9/8zU1UnY5LkFj7nmKGxzPAYv2fYgzHcLHnOF6mrqlYha3aleU69E1HSvhsz30m9qmetQcc7k81YUIYQQQgghhBBCCKFbc9p7W39WHn6stf6Q1trIPkdotK/dsGh361U1jkVRjOO43VbPq/262708vPeLzdAYXwudNXO+bha7qvi67UrJIxpfvrUhuo8pbGkZ7/vnYJ48ofHm4RqeOKH27ZU+WUJTvo5XAyUJtVtf75MktN9v8QkSlk+3AcUIy2tfQqUJy92tQCHCGUAZwvr6UVCW0C9mACUI3dscoAChsdvMhfbmcUKI0N3PA/IXlqvMhfp1JpC9sA4/XSFTOH8TchfOPgq5C83cF1L2Qv+Su9DOB/IW6k3uQj/jY6EM4cz33PyFMz82CRDqx+ss29V+/Vd7znNPVxyG4+610cfJ0b9jDFQ29A3N86b2Emd8jQ4E9qXQ25ZMEwYcPPWa3pq+CwLeiQUq3YcAHwTfOhg2Gyr0EDwVNFi8SL6B13ZfA4vvku+NtCFTvlreKPhZHTDgrwS/zhyEAZfN7CQfhqoMOJHYyh0MVZjwSfJgESR8zF64gJB1EELIPwgh5B+EEPIPQgj5ByGE/IMQQv7lITT/LlA4sYTTUqhbTmRDhGZqCcdojS5slndOFe1p/8B57Dl12QsfaCc2EgiJn5+bQLjJXvhGOwueQEg8zR9fOBLPgscXUs/zxxcSD4cJhNTz/PGF1LPg8YXUl0zFFzbEH5/iC33uwi31RWHRhfvshTvqi8KiC9+zF5KfiosuJP92lehC8m9XiS0cqQ/D6MKKerCILlyTXyMdW0h8KjGBkP4a6djCDfVgEV14Tz1YRBdS+6IL6YfD2ELqU4nxhdSnEtXxe/mq1UQBiKm/f34nHywOxHqiHwF3dr3+nFgAA+B0eVyLMRWEEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5F9CIdFTz1IJzVIRPbkuldANiujZ9KmEulcdzZNsUgltp4ge3Z5sLy1U0ZI8rCeR0LYHYdFQbMU0QtcUR2FlCQaMJEJTVydhsa/Tb8UUQmf3xVlYVE3yYzGB0Dan/6HOC2ud1S7lzhpXaJy2rj0vRV0W1/XD8n8SviiucDn03WUpvwDZiExyVZmqhQAAAABJRU5ErkJggg==");
  }
  &:last-child{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADKCAMAAABQfxahAAAAY1BMVEVBq+H///87qeAyp+Arpd8zp+Dn8/tJruJ5wOhRsePy+f2g0e7V6vfb7fjE4vRit+WUy+yMyOvO5/a22/Lt9vys1vD4/P6w2PF7wehtu+em0++83vObz+3I4/VftuWFxeoEn92mkcdXAAAK5UlEQVR4nN2dacOqLBCGdQCXSs0WyxY7//9XHm17cAHZ1e5Pz9vbsa6AYWYYwPPnr+B+3J6zOPQ8L67Kx22/Oxh4qmfgGRZV3LcVwohALa9R8wepXykvG81Hz5l8dcowehN3VeOjc1poPH2+5GmJyTD1lx6jh3rLz5S8WAPiY3/g473ck9Ps/ccsyYstJgLYL3YEJ/EnJ9W/zy81R/K1OPeL3buKPTgoMaCPbZgfeQpS3C/2Khh/cHDG4MHj859zIy/qZpEFb9jxbeTByevBOPm80Ce/m4aR0V3Irg2JxLxmv1evHxSq70s98vu/pPuSO+VYkfvZ7KzRvrp4nx8U776v9shDQCtbYCMqKukR3hJ+DD2V9guoJu+RX5EHsUU6jgJPtad/RLLuMzc5oscP1eQ98rh+H/Qe4EKJ8hD/E8RUfy3ueccdgpL6vA757jnQSOSEtfPJ+uA1m/dGT44l6v2UmI7xOuTl681o64z4rZ2GbeuiJ8cIhnx+tKY/sU1++Hw+br3JvhJD4E0Y2wS1g/+nbb/a5OuvccUSzrC+DgbG+Khwe8Jvk4d/XwBLxkA6KrStugh4py1b5AHd55iOgXllDsB7VrtFfml5Es7Qb8YGOVt9J6VFXrV/e0cdfuMCnPQcU5q86H4FN2bOwSAH1A9naPId6v4LfLEP/tBz1oXA8UAURpNf+t8BW3dpHPR1wP085f5Kk0cD3Q4Nxj8GFVvv64C6LR7cSNxq88EBh0rfpva9EWYcHNpjvNhXmKADTd4zcC+RWCefPybGQoI5kYr++sX1Ga3jtDXOA8aIA08gvaeoo23zhnMK8Llm0/wazRCmyPum/YOOreXmLDc5oPT9QYc09z7x28urociv7CFna3bjfKQJobLp6cXmdPboBTp06JDzeh6yk6uwbNiPwXUdhc+lWOrVd0qKIl/zxhwJTaxZd2QuKmd8adSBboSPfpd8y7U2gMwHMLmDGK0r8nFQhMlZSV0d2fdbeyJf90SCvO7xZqc35mRiT1SwKkNeT29Hk+TuOzuEf26NqIV7C2UGF2Bc5KBaAqC+veCs9vePkbF0BctntCYARr5d0K3ApaH57erYwAFpfXER77X7BEOj3fEwb7e4UMTSF4pNrDTbj8xpgdfpqnR8Lj7uAD/0Q1enw5y26n1yGVsLRDc76dTAoar3+WPZKLZwuOs9TUYu/ZihgKuVgZT7LoAzneG+d2faB8uH+FnnEQGO1P3ZgUyvHQFOhz6fu9Ig8tSzKvvWkWkHb7hntlaXVFb2lNkfbsiZueMW+VHJ6AAuVSqO5eypqhAzj8ZeRZYQ4GpwKE1PTtjuZrtyQNmtAuRdJKM4N+Rsr6NNLjmv0QKCI6lO74acnTRmVAgpCXB4EY/jnFg4wi4EHq4KUxUgXO4FPXons5o4uX5ZWtPrhXbWiKSAtEXYq+BD1Z+6erb8aLd34r2COHlqJo6oWz7e8g2ek4hFgtxcvqDZUVYe2TGNkyhVorcbK0B9qu73KFszNlM6IRe2cL75srxmM6VXrtOed+8iG0XY9bt9chu98LmXFMfRbb8LvnbfRQaS7bYP7V1a2zI9NX/zA6C4fGwvp9TFhC7svbrphs124vo3cOLJsNdFhsidL37YE2LHkIM79U4/g47YWdLhPYrnCVa2rahXBDhG7nj9w54wO1PGIHeyy8CBMDt2Yu3IDUb2+y9EmAnO3oucGNk/NrEgFCKP2ok0E3sGpxZvtyVFjnHeCi2C5aPDWYgcNatFdEy9CpeOzgnVaPLmrYDDNTURlO7rtoyK47zS5K85vMmmrL8tv162neO4cDT5NzB/ZlNur4A6WXSP5zgyNHkrAf4MqMMs2rpa8rQiznROk996zjp8D6papnjTuUI93IIEvKp8ijz5OXJOFq5FrlAyMXNx8hJtv/1XQtOveKa9RT7FFgOr4pn2FrmhlaXZCPrlfwzy1Y8NdM6iWoe8u/N+6eLvOWqftvBb3Z1r4MzURs1UwAPvZKN+qrtzPbgu+U85sJxauD65/0vkQ4dLsMn78dpyRbjgXfIfmtJHhnkv3/47HuzYdpMu+e80On82H1hj+ZWRzs3HDJLbP+3DjfhO+yB5+hv9nZdwZpDrVv3ORGgEfIj8J4wcb0WNSf4T/Z2bgmOS+/ny7Ts3EcUmX37MNubAMcmLpU9tw9sSBcgXn6MYtezsOhkXx1LaEwgcfcOsEDJa5+5aA8cfipMbOlx7EoHI7ROc9yy3OIq7kihAbuAQ/YmERfYLcvtFkS0yLwdCh3aOjIjbEgf7aJgmQu5vvMV5skL2TeQOnnxpzc7ZfyxH7m/iZRl5TmW3JLnv770FsUM+DiRM7vun5bCP5VwlyX0/rcYu95uHxKY0GfLap9sCnn/0OrKapkRea7ON8by7vfjNSdI3yxU7NwfBKAoLH+PFJd91D0pZbfaPWVfN8cuhxMnjZv9wfrscj8fLLY/et9VOTceTeJPzyffkvXuWIEKWUPYscz8aP1ZbWqgmkosRInd1npcpCc/l4+S2jxk3LFH3TYDcyV1QxiSScRUmX1TyGUudVjbmySyo0YXyjuLkyxnpgqkYYXL/vJRGF1hKkyNfSh2B1IwmRO6fluHOCOXY5ciXsZguad7EyA8LaPTR6jcl8iXUzQhnYuTI/XzurU4E863S5HP3ZxT6unA2at670BX6ujD5as5pCc6Rh/rkcz5Zp3/9rVFyP5htq0tF5Qrk/mGmFRSqdxhLBDhFPMel9N4d1xbIfT+a37yuNKHJk/vH2VURKA5yaXI/CefV4zXuaJdeV5tV8QhS8FqVyf0kns1ol1lSMUDe3OI8jy4vm3nTJ2/uz5mDS4e0rrhT/dmO0xfOyCyiGST3/V2EJoVX9d30yesA7lo21+9OBC6deDNI3mh3q/CznsBxQKMzn5khb5Skl0cZOw1olL11s+Rvrdylp5kXaEnIHHnqzt4RHQ/mI2PkD3epaSPgpshdRjJmwA2Ruzwc1RC4GdvuMllDDBi3pwyQO41bsf509pY2+RVcBm5Y24H5SpM8yZwmKrRdVkpa5Iez2wSNbpDSkgb5ynFiCiTKeQWkTH7YOk7Igad+E/GQFMmDh+tEJMn0b1zXJ9+VzhOwBo26MnlxDJ1zg0Ze3RT57jzB5i3TQ1yefJPDFKk3c36bEnmR5tNkHMHoLC5LnhzLqfapkdhCTxciX+3WJUy2PQ8w50YVa+SrJF2XIZ4sr1yLhCpVT4Lk9/P6lO6S4HBYNToEyea+v2yjqm7oiXenAVYqehIl94PsH0IIf1X/PY/NaaiyNMI/5L6fOg2xBQXIjklvkc/wCBHAD8NuOoPcP0RzYgdc2bNsHXLn2RWeUCi5JUWPvHbJ41mwExg5ltg8ue/fp2cniH/quiXyqdmBgNgpOBbI6z4/2XgH5Lnp5wzy2tbVIfgE3Dh2Yde45LXHvnYckAJp3105GXmtNHOXewEEF6ltxEbEjtWCrZMEDBAUGc2ji4p/qkqE7Jo7QDjbu2/up8YyE6k9+HpwVxetMkYtjWejivRsvuoNAOPsNB22L5qH29ya86IM0UPd2GF+tx2LjUk497q6PkJ9eqhHtnfeW005CEoq335ItxXCiimqpqlRnF/nQN1IobJ/nzc5OvGEVXP+Um0ms+3eftAtIdW11N0pLz3UJCnJ0E26z9dq4OYdcbS9biY1ZoPSqxY5JE2e9hFlcdgCD+MsemzXp3QTTG3ImPoPFjKQnrUGxV0AAAAASUVORK5CYII=")
  }
`

export {
  SocialsBlock
}
