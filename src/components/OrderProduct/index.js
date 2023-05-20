import { Block, GradientButton, Text } from "@components";
import { navigate } from "@navigation/RootNavigation";
import { theme } from "@theme";
import { formatPrice } from "@utils/helper";
import React from "react";
import { Image } from "react-native";
import { DOMAIN } from "../../constants";
import styles from "./styles";
const OrderProduct = ({ item }) => {
  const renderStatus = () => {
    switch (item?.order_status) {
      case 0:
        return "Chờ xác nhận";
      case 1:
        return "Chờ lấy hàng";
      case 2:
        return "Đơn hàng đang giao";
      case 3:
        return "Đơn hàng đã được giao thành công";
      case -1:
        return "Đơn hàng đã được huỷ bởi bạn";
      case -2:
        return "Đơn hàng giao không thành công";
      default:
        break;
    }
  };

  const renderButtonTitle = () => {
    switch (item?.order_status) {
      case 0:
        return "Chi tiết đơn hàng";
      case 1:
        return "Chi tiết đơn hàng";
      case 2:
        return "Chi tiết đơn hàng";
      case 3:
        return "Đánh giá";
      case -1:
        return "Chi tiết đơn huỷ";
      case -2:
        return "Mua lại";
      default:
        break;
    }
  };

  const onPressAction = () => {
    // if(item?.order_status === -1){
    //   () => {
    //     navigate("CancelDetail", { item });
    //   };
    // }
    switch (item?.order_status) {
      case 0:
        navigate("DetailOrders", { item });
        break;
      case 1:
        navigate("DetailOrders", { item });
        break;
      case 2:
        navigate("DetailOrders", { item });
        break;
      case 3:
        navigate("VoteOrderDetail", { item });
        break;
      case -1:
        navigate("CancelDetail", { item });
        break;
      case -2:
        navigate("ProductDetail", { item });
        break;
      default:
    }
  };
  return (
    // <TouchableOpacity
    //   onPress={() => navigate("DetailOrders", { item })}
    //   style={styles.container}
    // >
    <Block style={styles.container}>
      <Block backgroundColor={theme.colors.greenBlur} paddingHorizontal={20}>
        <Block row borderBottomWidth={0.5} borderColor={theme.colors.gray_3}>
          <Block>
            <Image
              style={styles.imgProduct}
              source={{
                uri: item?.product_image?.includes("https://")
                  ? item?.product_image
                  : DOMAIN + item?.product_image,
              }}
            />
          </Block>
          <Block paddingVertical={10} space={"between"} flex>
            <Text
              size={16}
              fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
              numberOfLines={1}
            >
              {item?.product_name}
            </Text>
            <Text
              size={16}
              fontFamily={theme.fonts.fontFamily.SourceSans3Regular}
              numberOfLines={1}
            >
              {item?.product_description}
            </Text>
            <Text size={16}>
              Số lượng mua:{" "}
              <Text
                size={16}
                fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
              >
                x{item?.order_quantity}
              </Text>
            </Text>
            <Text
              color="#10A31E"
              right
              size={16}
              fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
            >
              {formatPrice(
                parseInt(item?.order_amount?.toString()?.split(".")[0])
              )}{" "}
              Đồng
            </Text>
          </Block>
        </Block>
        {/* <Text size={14} color={theme.colors.gray_3} paddingVertical={8} center>
          Xem thêm sản phẩm
        </Text> */}
        <Block
          row
          space={"between"}
          alignCenter
          // borderTopWidth={0.5}
          borderBottomWidth={0.5}
          paddingVertical={8}
          borderColor={theme.colors.gray_3}
        >
          <Text color="#747474" size={14}>
            {item?.order_quantity || 1} sản phẩm
          </Text>
          <Block>
            {parseInt(item?.order_discount?.toString()?.split(".")[0]) > 0 && (
              <Text size={14}>
                Khuyến mãi:{" "}
                <Text
                  fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                  size={14}
                  color="#10A31E"
                >
                  {formatPrice(
                    parseInt(item?.order_discount?.toString()?.split(".")[0])
                  )}{" "}
                  Đồng
                </Text>
              </Text>
            )}

            <Text size={14}>
              Thành tiền:{" "}
              <Text
                fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
                size={14}
                color="#10A31E"
              >
                {formatPrice(
                  parseInt(item?.order_total?.toString()?.split(".")[0])
                )}{" "}
                Đồng
              </Text>
            </Text>
          </Block>
        </Block>
        <Block row alignCenter={"center"} space={"between"} paddingVertical={8}>
          <Text flex marginRight={20} size={14} color="#747474">
            {renderStatus()}
          </Text>
          <GradientButton
            onPress={
              item?.order_comment === 0
                ? onPressAction
                : () => navigate("ProductDetail", { item })
            }
            title={item?.order_comment === 0 ? renderButtonTitle() : "Mua lại"}
            style={styles.GradientButton}
            styleTitle={styles.styleTitle}
          />
        </Block>
      </Block>
    </Block>

    // </TouchableOpacity>
  );
};

export default OrderProduct;
