import React, { Component } from 'react';
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NhaHat from './nha_hat_5b.jpeg'
import NgocGiau from './ngoc_giau.jpg'
import MyUyen from './my_uyen.jpg'

import './introduce.css'

const Content = styled.p.attrs({

})`
  white-space:pre-line;
`

class Introduce extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
  }


  render() {
    return(
      <Container>
        <Row>
          <Col lg={8} xl={8} md={12} sm={12} xs={12}>
            <h3> 
              Giới Thiệu
            </h3>

            <img src={NhaHat} />

            <p>
              Nhà hát mà khán giả yêu mến thường gọi là Sân Khấu 5B vì nhà hát tọa lạc tại 5B Võ Văn Tần, Q.3, TP. HCM. Nhà hát được thành lập từ ngày 07/07/1997 theo quyết định số 3443/QĐ_UB_NCVX của UBND TP.Hồ Chí Minh.
            </p>

            <p>
               Tiền thân là câu lạc bộ Sân Khấu Thể Nghiệm được thành lập từ ngày 01/08/1984 theo quyết định số 1900_UB của UBND TP. Hồ Chí Minh.
            </p>
            
            <p>
              Đây là nhà hát kịch xã hội hóa, tự thu chi, không sống bằng ngân sách Nhà Nước đầu tiên của Thành Phố và cả nước.
            </p>

            <p>
               Là mô hình xã hội hóa hoạt động sân khấu tiêu biểu của Thành Phố suốt 22 năm qua.
            </p>

            <p>
              - Đã dàn dựng biểu diễn cả trăm vở kịch trong nước và nước ngoài.
            </p>
            <p>

             - Đã đào tạo nhiều thế hệ diễn viên trẻ cho sân khấu thành phố.
            </p>

            <p>
             - Đã khẳng định hiệu quả nghệ thuật một loại hình đó là sân khấu nhỏ.
            </p>

            <p>
              - Đã được thưởng Huân chương lao động hạng 3 và nhiều bằng khen, giấy khen trong các kỳ hội diễn và các đợt biểu diễn phục vụ chính trị.
            </p>

            <p>
              - Đặc điểm biểu diễn không dùng micro, khán giả và sân khấu gần gũi, cùng chan hòa giao lưu trong sáng tạo nghệ thuật.
            </p>
          </Col>

          <Col lg={4} xl={4} md={12} sm={12} xs={12}>
            <h3> Ban Giám Đốc </h3>
            <Row>
              <Col lg={4} xl={4}>
                <img src={NgocGiau} className="directorImg" />
              </Col>

              <Col lg={4} xl={8}>
                <h4> NSND Trần Ngọc Giàu </h4>
                <p> 
                  Chỉ đạo nghệ thuật
                  <br />
                  Chủ Tịch Hội SKTP
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={4} xl={4}>
                <img src={MyUyen} className="directorImg" />
              </Col>

              <Col lg={4} xl={8}>
                <h4> NSƯT Mỹ Uyên </h4>
                <p> 
                  Giám đốc
                  <br />
                  Ủy viên Hội SKTP
                </p>
              </Col>
            </Row>


          </Col>
        </Row>


        <Row>
          <Col>
            <h3> Giải Thưởng </h3>
            <Content> Giải thưởng tác phẩm sân khấu của hội nghệ sĩ sân khấu Việt Nam trên sân khấu kịch 5B Võ Văn Tần, Quận 3.
            <br />
            Năm 1994: "Tình 281"
            <br />
            Năm 1995: "Dạ cổ hoài lang" (Bằng khen Bộ Văn hóa Việt Nam)
            <br />
            Năm 1997: "Ngôi nhà của chúng ta"
            <br />
            Năm 1998: "Ký ức"
            <br />
            Năm 1999: "Nguyệt hạ"
            <br />
            Năm 2000: "Yêu thầy"
            <br />
            Năm 2001: "Giai điệu tình yêu"
            <br />
            Năm 2002: Tham dự Liên hoan Sân khấu Thử nghiệm Quốc lần thứ I tại Hà Nội vở “Nỗi đau nhân loại” Năm 2003: "Bảy sắc cầu vòng"
            <br />
            Năm 2004: "Hợp đồng hôn nhân"
            <br />
            Năm 2005: "Cõi tình"
            <br />
            Giải thưởng tác phẩm sân khấu 2006 giải B (Hội nghệ sĩ sân khấu Việt Nam)
            <br />
            Năm 2006 : Một người đi lấy chồng 
            <br />
            Năm 2007 : 270 Garm - Giải thưởng tác phẩm sân khấu 2008 (Hội nghệ sĩ sân khấu TP.HCM)
            <br />
            Năm 2008 : Đôi bờ
            <br />
            Năm 2009 : Cánh đồng bất tận
            <br />
            Vở diễn H.C.Bạc Liên hoan về "Hình tượng người chiến sĩ CAND" tại Hà Nội 21/9 - 2/10/2010 (H.C.Vàng : Việt Anh, Công Ninh, Mỹ Uyên - H.C.Bạc : C.Minh Đạt, Cát Tường, Việt Hà, Hùng Thuận)
            <br />
            Năm 2010 : Đời có đợi anh không?

            </Content>
          </Col>

        </Row>
      </Container>
    )
  }

}

export default Introduce;